import { useQuery, useQueryClient } from "@tanstack/react-query";
import { viewAllBooks } from "../ApisCalls/ViewAllBooks";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

export const useViewAllBooks = () => {
  // console.log("Params",params);
  const [searchParam] = useSearchParams();
  // console.log("SearchParam", searchParam);
  // console.log("get", searchParam.get("page"));

  const pageNumber = Number(searchParam.get("page") || 1);
  console.log("PageNumber",pageNumber)
  const queryClient = useQueryClient();
  const {
    data: books,
    isPending,
    isError,
    error,
  } = useQuery({
    queryFn:()=> viewAllBooks({pageNumber}),
    queryKey: ['books',pageNumber],
    onError: (error) => {
      toast.error(error.message);
    },
  });

  if(books && pageNumber>1){
    queryClient.prefetchQuery({
      queryKey:['books',pageNumber],
      queryFn:()=>viewAllBooks({pageNumber:pageNumber-1})
    
    })
  }
  if(books && pageNumber < books.totalPage){
    queryClient.prefetchQuery({
      queryKey:[books,pageNumber],
      queryFn:()=>viewAllBooks({pageNumber:pageNumber+1})
    
    })
  }


  return { books, isPending, isError, error };
};





import { useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

import { VIEW_ALL_BOOKS } from "../../../utils/Routes";
import { commonApi } from "../../../api/commonApi";
// import { VIEW_ALL_BOOKS } from "../utils/Routes";
// import { getAllApi } from "../ApisCalls/getAllApi";


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
    queryFn:()=> commonApi({pageNumber:pageNumber,path:`${VIEW_ALL_BOOKS
    }?pageSize=5&sortingOrder=descending&sortParameter=addedDate`,isLogin:false,method:"GET",data:null}),
    queryKey: ['books',pageNumber],
    onError: (error) => {
      toast.error(error.message);
    },
  });

  if(books && pageNumber>1){
    queryClient.prefetchQuery({
      queryKey:['books',pageNumber],
      queryFn:()=>getAllApi({pageNumber:pageNumber-1,path:`${VIEW_ALL_BOOKS}?pageSize=5&sortingOrder=descending&sortParameter=addedDate`})
    
    })
  }
  if(books && pageNumber < books.totalPage){
    queryClient.prefetchQuery({
      queryKey:[books,pageNumber],
      queryFn:()=>getAllApi({pageNumber:pageNumber+1,path:`${VIEW_ALL_BOOKS}?pageSize=5&sortingOrder=descending&sortParameter=addedDate`})
    
    })
  }


  return { books, isPending, isError, error };
};





import { useQuery } from "@tanstack/react-query";
import { commonApi } from "../../../api/commonApi";
import toast from "react-hot-toast";
import { GET_ALL_BORROWED_BOOKS_OF_AUTH_USER } from "../../../utils/Routes";

export const useGetAllBorrowedBooksOfAuthUser = () => {
  const {
    data: borrowedBooks,
    isPending,
    isError,
  } = useQuery({
    queryKey:["borrowedBooks","books"],
    queryFn:()=> commonApi({pageNumber:null,path:`${GET_ALL_BORROWED_BOOKS_OF_AUTH_USER
        }`,isLogin:false,method:"GET",data:null}),
    onError: (error) => {
      toast(error.message);
    },
  });
  return { borrowedBooks, isPending, isError };
};

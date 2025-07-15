import toast from "react-hot-toast";
import { commonApi } from "../../../api/commonApi"
import { useMutation,useQueryClient } from "@tanstack/react-query";

export const useReturnBook=()=>{
  const queryClient=useQueryClient();
  const {mutate:returnBook,isPending,isError}=  useMutation({
        mutationFn:commonApi,
        onSuccess:(data)=>{
             queryClient.invalidateQueries(["borrowedBooks","books"]);;
            toast.success(data.message);
           
        },
        onError:(data)=>{
            toast.error(data.message);
        }
    });
    return{
        returnBook,isPending,isError
    }
}
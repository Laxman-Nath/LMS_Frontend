import toast from "react-hot-toast";
import { commonApi } from "../../../api/commonApi"
import { useMutation } from "@tanstack/react-query";

export const useReturnBook=()=>{
  const {mutate:returnBook,isPending,isError}=  useMutation({
        mutationFn:commonApi,
        onSuccess:(data)=>{
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
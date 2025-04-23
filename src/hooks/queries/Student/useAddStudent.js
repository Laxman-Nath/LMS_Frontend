import { useMutation } from "@tanstack/react-query"
import { postApi } from "../../api/PostApi"
import toast from "react-hot-toast"

export const useAddStudent=()=>{
    const {
        mutate:addStudent,
        isPending,
        isError
    }=useMutation(
        {
            mutationFn:postApi,
            onSuccess:(data)=>{
                toast.success(data.message);
            },
            onError:(error)=>{
             toast.error(error.message);
            }
        }
    )
    return {addStudent,isPending,isError};
}
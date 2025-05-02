import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { editApi } from "../../../api/EditApi";

export const useUpdateStudent=()=>{
    const {
        mutate:updateStudent,
        isPending,
        isError
    }=useMutation({
        mutationFn:editApi,
        onSuccess:(data)=>{
            toast.success(data.message);
        },
        onError:(error)=>{
            toast.error(error.message);
        }
    })
    return {updateStudent,isPending,isError};
}
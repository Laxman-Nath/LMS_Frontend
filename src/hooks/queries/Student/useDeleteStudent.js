import { useMutation } from "@tanstack/react-query";
import { deleteApi } from "../../api/DeleteApi";
import toast from "react-hot-toast";

export const useDeleteStudent=()=>{
    const {mutate:deleteStudent,isPending,isError}=useMutation(
        {
            mutationFn:deleteApi,
            onSuccess:(data)=>{
                toast.success(data.message);
            },
            onError:(error)=>{
                toast.error(error.message);
            }
        }
    )
    return {deleteStudent,isPending,isError};
}
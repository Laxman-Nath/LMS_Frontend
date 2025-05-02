import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { deleteApi } from "../../../api/DeleteApi";

export const useDeleteTeacher=()=>{
    const {mutate:deleteTeacher,isPending,isError}=useMutation(
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
    return {deleteTeacher,isPending,isError};
}
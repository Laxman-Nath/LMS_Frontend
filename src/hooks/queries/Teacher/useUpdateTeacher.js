import { useMutation } from "@tanstack/react-query";
import { editApi } from "../../api/EditApi";
import toast from "react-hot-toast";

export const useUpdateTeacher=()=>{
    const {
        mutate:updateTeacher,
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
    return {updateTeacher,isPending,isError};
}
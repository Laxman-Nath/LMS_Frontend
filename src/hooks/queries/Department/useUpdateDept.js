import { useMutation } from "@tanstack/react-query";
import { editApi } from "../../ApisCalls/EditApi";
import toast from "react-hot-toast";

export const useUpdateDept=()=>{
    const {
        mutate:updateDept,
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
    return {updateDept,isPending,isError};
}
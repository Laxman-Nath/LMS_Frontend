import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editApi } from "../../../api/EditApi";

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
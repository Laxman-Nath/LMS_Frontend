import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { deleteApi } from "../../../api/DeleteApi";

export const useDeleteDept=()=>{
    const {mutate:deleteDept,isPending,isError}=useMutation(
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
    return {deleteDept,isPending,isError};
}
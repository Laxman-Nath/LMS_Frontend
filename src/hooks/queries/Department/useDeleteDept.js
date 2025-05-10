import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { commonApi } from "../../../api/commonApi";

export const useDeleteDept=()=>{
    const {mutate:deleteDept,isPending,isError}=useMutation(
        {
            mutationFn:commonApi,
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
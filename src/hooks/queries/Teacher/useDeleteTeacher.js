import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { commonApi } from "../../../api/commonApi";

export const useDeleteTeacher=()=>{
    const {mutate:deleteTeacher,isPending,isError}=useMutation(
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
    return {deleteTeacher,isPending,isError};
}
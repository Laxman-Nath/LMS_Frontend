import { useMutation } from "@tanstack/react-query"

import toast from "react-hot-toast"
import { postApi } from "../../../api/PostApi";
import { commonApi } from "../../../api/commonApi";

export const useAddTeacher=()=>{
    const {
        mutate:addTeacher,
        isPending,
        isError
    }=useMutation({
        mutationFn:commonApi,
        onSuccess:(data)=>{
            toast.success(data.message);
        }
        ,
        onError:(error)=>{
            toast.error(error.message);
        }
    })

    return {isPending,isError,addTeacher};
}
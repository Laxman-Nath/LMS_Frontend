import { useMutation } from "@tanstack/react-query"
import { postApi } from "../../ApisCalls/PostApi"
import toast from "react-hot-toast"

export const useAddTeacher=()=>{
    const {
        mutate:addTeacher,
        isPending,
        isError
    }=useMutation({
        mutationFn:postApi,
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
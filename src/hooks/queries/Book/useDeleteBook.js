import toast from "react-hot-toast";

import { useMutation } from "@tanstack/react-query";
import { deleteApi } from "../../../api/DeleteApi";
import { commonApi } from "../../../api/commonApi";
;
// import { deleteApi } from "../ApisCalls/DeleteApi";

export const useDeleteBook=()=>{
    const {
        mutate:deleteBook,
        isPending,
        isError,
        error,
      } = useMutation({
        mutationFn:()=> commonApi,
        onSuccess: (data) => {
        //   console.log("Success inside query", data);
          toast.success(data.message || "Book is deleted successfully!");
        },
        onError: (error) => {
          toast.error(error.message);
        },
      });
    
      return { deleteBook, isPending, isError, error };
}
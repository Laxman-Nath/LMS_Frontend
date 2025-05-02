import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { postApi } from "../../../api/PostApi";

export const useAddDept = () => {
  const { mutate:addDept, isPending, isError } = useMutation({
    mutationFn: postApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { addDept, isPending, isError };
};

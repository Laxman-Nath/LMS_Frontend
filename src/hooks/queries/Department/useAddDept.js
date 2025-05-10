import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { commonApi } from "../../../api/commonApi";

export const useAddDept = () => {
  const { mutate:addDept, isPending, isError } = useMutation({
    mutationFn: commonApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { addDept, isPending, isError };
};

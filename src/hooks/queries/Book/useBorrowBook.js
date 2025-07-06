import { useMutation } from "@tanstack/react-query";
import { commonApi } from "../../../api/commonApi";
import toast from "react-hot-toast";

export const useBorrowBook = () => {
  const {
    mutate: borrowbook,
    isPending,
    isError,
  } = useMutation({
    mutationFn: commonApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { borrowbook, isPending, isError };
};

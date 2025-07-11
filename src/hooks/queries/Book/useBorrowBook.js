import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import { commonApi } from "../../../api/commonApi";
import toast from "react-hot-toast";


export const useBorrowBook = () => {
  const queryClient = useQueryClient();
  const {
    mutate: borrowbook,
    isPending,
    isError,
  } = useMutation({
    mutationFn: commonApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["borrowedBooks","books"]);
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { borrowbook, isPending, isError };
};

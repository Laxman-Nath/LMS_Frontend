import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editApi } from "../../ApisCalls/EditApi";



export const useUpdateBook = () => {
  const {
    mutate: update,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: editApi,
    onSuccess: (data) => {
      //   console.log("Success inside query", data);
        toast.success(data.message || "Book is updated successfully!");
      },
      onError: (error) => {
        toast.error(error.message);
      },
  });

  return { update, isPending, isError, error };
};

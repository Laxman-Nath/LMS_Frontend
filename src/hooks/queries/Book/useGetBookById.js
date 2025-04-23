import { getBookById } from "../ApisCalls/getBookById";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
export const useGetBookById = ({bookId}) => {
  const { data, isPending, isError, error } = useQuery({
    queryFn: getBookById({bookId}),
    queryKey:["data",bookId],
    onError: (error) => toast.error(error.messsage),
  });

  return { data, isPending, isError, error };
};

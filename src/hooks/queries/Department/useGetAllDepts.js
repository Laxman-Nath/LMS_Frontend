import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { VIEW_ALL_DEPTS } from "../../../utils/Routes";
import { commonApi } from "../../../api/commonApi";



export const useGetAllDepts = () => {
  const [searchParams] = useSearchParams();
  const pageNumber = Number(searchParams.get("page") || 1);
  const queryClient = useQueryClient();
  const {
    data: depts,
    isPending,
    isError,
    error,
  } = useQuery({
    queryFn: () =>
      commonApi({
        pageNumber,
        path: `${VIEW_ALL_DEPTS}?pageSize=5&sortingOrder=descending&sortParameter=addedDate`,
      isLogin:false,method:"GET",data:null}),
    queryKey: ["depts", pageNumber],
    onError: (error) => {
      toast.error(error.message);
    },
  });

  if(depts && pageNumber>1){
      queryClient.prefetchQuery({
        queryKey:['depts',pageNumber],
        queryFn:()=>getAllApi({pageNumber:pageNumber-1,path:`${VIEW_ALL_DEPTS}?pageSize=5&sortingOrder=descending&sortParameter=addedDate`})
      
      })
    }
    if(depts && pageNumber <depts.totalPage){
      queryClient.prefetchQuery({
        queryKey:['depts',pageNumber],
        queryFn:()=>getAllApi({pageNumber:pageNumber+1,path:`${VIEW_ALL_DEPTS}?pageSize=5&sortingOrder=descending&sortParameter=addedDate`})
      
      })
    }

  return { depts, isError, isPending, error };
};

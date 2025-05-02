import { useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import { getAllApi } from "../../../api/getAllApi";
import { VIEW_ALL_TEACHERS } from "../../../utils/Routes";

export const useGetAllTeachers=()=>{
    const [searchParam] = useSearchParams();
    // console.log("SearchParam", searchParam);
    // console.log("get", searchParam.get("page"));
  
    const pageNumber = Number(searchParam.get("page") || 1);
    console.log("PageNumber",pageNumber)
    const queryClient = useQueryClient();
    const {
      data: teachers,
      isPending,
      isError,
      error,
    } = useQuery({
      queryFn:()=>getAllApi({pageNumber,path:`${VIEW_ALL_TEACHERS}?pageSize=5&sortingOrder=descending&sortParameter=addedDate`}),
      queryKey: ['teachers',pageNumber],
      onError: (error) => {
        toast.error(error.message);
      },
    });
  
    if(teachers && pageNumber>1){
      queryClient.prefetchQuery({
        queryKey:['teachers',pageNumber],
        queryFn:()=>getAllApi({pageNumber:pageNumber-1,path:`${VIEW_ALL_TEACHERS}?pageSize=5&sortingOrder=descending&sortParameter=addedDate`})
      
      })
    }
    if(teachers && pageNumber < teachers.totalPage){
      queryClient.prefetchQuery({
        queryKey:['teachers',pageNumber],
        queryFn:()=>getAllApi({pageNumber:pageNumber+1,path:`${VIEW_ALL_TEACHERS}?pageSize=5&sortingOrder=descending&sortParameter=addedDate`})
      
      })
    }

      return {teachers,isPending,isError,error};
}
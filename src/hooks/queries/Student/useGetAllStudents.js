import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import toast from "react-hot-toast";
import { VIEW_ALL_STUDENTS } from "../../../utils/Routes";
import { commonApi } from "../../../api/commonApi";

export const useGetAllStudents=()=>{
   // console.log("Params",params);
  const [searchParam] = useSearchParams();
  // console.log("SearchParam", searchParam);
  // console.log("get", searchParam.get("page"));

  const pageNumber = Number(searchParam.get("page") || 1);
  console.log("PageNumber",pageNumber)
  const queryClient = useQueryClient();
  const {
    data: students,
    isPending,
    isError,
    error,
  } = useQuery({
    queryFn:()=> commonApi({pageNumber,path:`${VIEW_ALL_STUDENTS}?pageSize=5&sortingOrder=descending&sortParameter=addedDate`,isLogin:false,method:"GET",data:null}),
    queryKey: ['students',pageNumber],
    onError: (error) => {
      toast.error(error.message);
    },
  });

  if(students && pageNumber>1){
    queryClient.prefetchQuery({
      queryKey:['students',pageNumber],
      queryFn:()=>getAllApi({pageNumber:pageNumber-1,path:`${VIEW_ALL_STUDENTS}?pageSize=5&sortingOrder=descending&sortParameter=addedDate`})
    
    })
  }
  if(students && pageNumber < students.totalPage){
    queryClient.prefetchQuery({
      queryKey:['students',pageNumber],
      queryFn:()=>getAllApi({pageNumber:pageNumber+1,path:`${VIEW_ALL_STUDENTS}?pageSize=5&sortingOrder=descending&sortParameter=addedDate`})
    
    })
  }


  return { students, isPending, isError, error }; 
}
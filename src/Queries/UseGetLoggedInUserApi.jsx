import { useQuery } from "@tanstack/react-query";
import { GetLoggedInUserApi } from "../ApisCalls/GetLoggedInUserApi";

export const UseGetLoggedInUserApi = () => {

 const{data:user,isPending,isError,error}=   useQuery({
        queryFn:GetLoggedInUserApi,
        queryKey:['user']
    })
  return {user,isPending,isError,error};
};

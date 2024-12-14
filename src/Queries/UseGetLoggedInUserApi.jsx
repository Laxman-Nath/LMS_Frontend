import { useQuery } from "@tanstack/react-query";
import { GetLoggedInUserApi } from "../ApisCalls/GetLoggedInUserApi";

export const UseGetLoggedInUserApi = () => {

 const{data:user,isLoading,isError,error}=   useQuery({
        queryFn:GetLoggedInUserApi,
        queryKey:['user']
    })
  return {user,isLoading,isError,error};
};

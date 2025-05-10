import { useQuery } from "@tanstack/react-query";

import { commonApi } from "../../../api/commonApi";
import { GET_AUTHENTICATED_USER } from "../../../utils/Routes";


export const useGetLoggedInUserApi = () => {

 const{data:user,isPending,isError,error}=   useQuery({
        queryFn:()=>commonApi({path:GET_AUTHENTICATED_USER,pageNumber:null,method:"GET",isLogin:false,data:null}),
        queryKey:['user']
    })
  return {user,isPending,isError,error};
};

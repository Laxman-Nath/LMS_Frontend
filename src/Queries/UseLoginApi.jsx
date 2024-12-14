import { useMutation } from '@tanstack/react-query';
import { LoginApi } from '../ApisCalls/LoginApi';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../utils/Token';
export const UseLoginApi=()=>{
    const navigate=useNavigate();
    const {mutate:login,isPending,isError}=useMutation({
        mutationFn:LoginApi,
        onSuccess:(data)=>{
          setToken(data.token);
           navigate("/");
        },
        onError:(error)=>{
            console.log(error);
        }
    })

    return {login,isPending,isError};
}
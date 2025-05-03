import { useMutation } from "@tanstack/react-query";
import { LoginApi } from "../../api/LoginApi";
import { useNavigate } from "react-router-dom";
import { addRole, setToken } from "../../utils/Token";
import toast from "react-hot-toast";
import { UseGetLoggedInUserApi } from "./UseGetLoggedInUserApi";
export const UseLoginApi = () => {
  const navigate = useNavigate();
  const {
    mutate: login,
    isPending,
    isError,
  } = useMutation({
    mutationFn: LoginApi,
    onSuccess: (data) => {
      setToken(data.token);
      // addRole(data.roleName);

      navigate("/");
      toast.success(data.message);
    },

    onError: (error) => {
      console.log(error);
      navigate("/login");
      toast.error(error.message);
    },
  });

  return { login, isPending, isError };
};

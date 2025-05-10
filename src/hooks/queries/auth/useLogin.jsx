import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../../utils/Token";
import toast from "react-hot-toast";
import { commonApi } from "../../../api/commonApi";

export const useLogin = () => {
  const navigate = useNavigate();
  const {
    mutate: login,
    isPending,
    isError,
  } = useMutation({
    mutationFn: commonApi,
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

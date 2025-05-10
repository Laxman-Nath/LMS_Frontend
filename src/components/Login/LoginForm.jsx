import { useState } from "react";
import { SubmitButton } from "../SubmitButton";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { LOGIN } from "../../utils/Routes";
import { useLogin } from "../../hooks/queries/auth/useLogin";
export const LoginForm = () => {
  const { register, handleSubmit, formState, getValues } = useForm();
  const queryClient=useQueryClient();
  const{login,isPending,isError}=useLogin();
  const { errors } = formState;
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((showPassword) => !showPassword);
  };
  const onSubmit = (data) => {
  
    login({data,isLogin:true,method:"POST",path:LOGIN,pageNumber:null});
    console.log(data);
  };
  const onError = (error) => {
    console.log(error);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="mt-10 shadow-2xl p-4 w-[45%] bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 rounded-md"
      >
       <h1 className="font-bold text-5xl text-center rounded-md text-white ">
            LOGIN
          </h1>
        <hr className="border-t border-gray-300 w-full h-2" />
        <Input
          type="email"
          name="email"
          label="UserName"
          id="email"
          register={{
            ...register("email", {
              required: "Email is required",
            }),
          }}
          error={errors?.email?.message}
        />
        <Input
          type="password"
          name="password"
          label="Password"
          id="password"
          register={{
            ...register("password", {
              required: "Password is required",
            }),
          }}
          error={errors?.password?.message}
          togglePasswordVisibility={togglePasswordVisibility}
          showPassword={showPassword}
        />
        <SubmitButton>Submit</SubmitButton>
      </form>
    </>
  );
};

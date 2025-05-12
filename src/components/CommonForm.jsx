import { useState } from "react";
import { Input } from "./Input";
import { SubmitButton } from "./SubmitButton";
import { useForm } from "react-hook-form";

/* eslint-disable react/prop-types */
export const CommonForm = ({ formData, title, onSubmit, onError }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((showPassword) => !showPassword);
  };
  const { register, handleSubmit, formState, getValues } = useForm();
  const { errors } = formState;
  console.log("data",formData);
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="mt-10 shadow-2xl p-4 w-[45%] bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 rounded-md"
      >
        <h1 className="font-bold text-5xl text-center rounded-md text-white ">
          {title}
        </h1>
        <hr className="border-t border-gray-300 w-full h-2" />
        {formData.map((data, index) => (
          <Input
            key={index}
            type={data.type}
            name={data.name}
            label={data.label}
            id="email"
            togglePasswordVisibility={
              data.name === "password" ? togglePasswordVisibility : undefined
            }
            showPassword={data.name === "password" ? showPassword : undefined}
            register={{
              ...register(data.name, {
                required: data.validation,
              }),
            }}
            error={errors?.[data.name]?.message}
          />
        ))}
        <SubmitButton>Submit</SubmitButton>
      </form>
    </>
  );
};

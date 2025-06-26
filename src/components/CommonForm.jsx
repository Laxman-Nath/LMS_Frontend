/* eslint-disable react/prop-types */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "./Input";
import { SubmitButton } from "./SubmitButton";
import { RadioInput } from "./RadioInput";
import { SelectInput } from "./SelectInput";
import { FileInput } from "./FileInput";

export const CommonForm = ({ formData, title, onSubmit, onError, handleImage, image,radioList,isPending }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const { register, handleSubmit, formState, getValues } = useForm();
  const { errors } = formState;

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

        {formData.map((data, index) => {
          if (data.type === "radio") {
            return (
              <RadioInput
                key={index}
                inputs={data.options}
                name={data.name}
                register={{
                  ...register(data.name, { required: data.validation }),
                }}
              />
            );
          } else if (data.type === "select") {
            return (
              <SelectInput
                key={index}
                name={data.name}
                label={data.label}
                depts={radioList}
                register={{
                  ...register(data.name, { required: data.validation }),
                }}
              />
            );
          } else if (data.type === "file") {
            return (
              <FileInput
                key={index}
                name={data.name}
                label={data.label}
                id={data.id}
                error={!image && "Image is required"}
                register={{ ...register(data.name) }}
                handleImage={handleImage}
              />
            );
          } else {
            return (
              <Input
                key={index}
                type={data.type}
                name={data.name}
                label={data.label}
                id={data.id}
                togglePasswordVisibility={
                  data.name === "password" ? togglePasswordVisibility : undefined
                }
                showPassword={data.name === "password" ? showPassword : undefined}
                register={{
                  ...register(data.name, { required: data.validation }),
                }}
                error={errors?.[data.name]?.message}
              />
            );
          }
        })}

        <SubmitButton isPending={isPending}>Submit</SubmitButton>
      </form>
    </>
  );
};

/* eslint-disable react/prop-types */
import { useState } from "react";

import { useForm } from "react-hook-form";
import { Spinner } from "../../uiutils/Spinner";
import { uploadToCloudinary } from "../../utils/uploadToCloudinary";

import { RadioInput } from "../../uiutils/RadioInput";
import { FileInput } from "../../uiutils/FileInput";
import { HiXMark } from "react-icons/hi2";
import { SubmitButton } from "../../uiutils/SubmitButton";
import { Input } from "../../uiutils/Input";
import {  UPDATE_TEACHER } from "../../utils/Routes";
import { useUpdateTeacher } from "../../Queries/Teacher/useUpdateTeacher";

export const EditTeacherForm = ({ teacher, onClick }) => {
  const [image, setImage] = useState("");
  const { updateTeacher, isError, isPending } = useUpdateTeacher();
  const [isUploading, setIsUploading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((showPassword) => !showPassword);
  };
  console.log("Teacher id:", teacher.id);
  const {
    register,
    handleSubmit,
    formState,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: teacher?.firstName,
      lastName: teacher?.lastName,
      email: teacher?.email,
      address: teacher?.address,
      gender: teacher?.gender,
      password: teacher?.password,
      confirmPassword: teacher?.confirmPassword,
      profileImage: teacher?.profileImage,

      joinedDate: teacher?.joinedDate,
    },
  });
  if (isError) {
    console.log("error");
  }
  if (isPending) {
    return <Spinner />;
  }
  const handleImage = async (event) => {
    setIsUploading(true);
    const file = event.target.files[0];
    try {
      if (file) {
        const imageUrl = await uploadToCloudinary(file, "image");
        // console.log("image url",imageUrl);

        setImage(imageUrl);
      }
    } catch (error) {
      console.log("Error occured", error);
    } finally {
      setIsUploading(false);
    }
  };
  const onSubmit = (data) => {
    if (isUploading) {
      console.log("image has not been uploaded yet");
      return;
    }
    console.log("Before", data.ProfileImage);
    console.log("Image:",image);
    data.profileImage = image;
    console.log("After", data.ProfileImage);
    updateTeacher({
      data: data,
      path: `${UPDATE_TEACHER}?teacherId=${teacher.id}`,
    });
    console.log(data);
  };
  const onError = (error) => {
    console.log(error);
  };
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center mt-4">
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className=" shadow-2xl shadow-white p-4 w-[40%]  bg-primary rounded-md flex flex-col justify-center text-white"
        >
          <button
            className=" text-white border-none mt-2 ml-0 rounded-sm translate-x-2 transition-all duration-200 "
            onClick={onClick}
          >
            <HiXMark className="w-8 h-8 text-white hover:text-gray-900" />
          </button>
          <h1 className="font-bold text-5xl text-center rounded-md text-green-500">
            Update Teacher
          </h1>
          <hr className="border-t border-gray-300 w-full h-2" />
          <div className="grid grid-cols-2 gap-2">
            <Input
              type="text"
              name="firstName"
              label="First Name"
              id="firstName"
              register={{
                ...register("firstName", {
                  required: "FirstName is required",
                }),
              }}
              error={errors.firstName}
            />

            <Input
              type="text"
              name="lastName"
              label="Last Name"
              id="lastName"
              register={{
                ...register("lastName", {
                  required: "LastName is required",
                }),
              }}
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Input
              type="email"
              name="email"
              label="Email"
              id="email"
              register={{
                ...register("email", {
                  required: "Email is required",
                }),
              }}
            />

            <Input
              type="text"
              name="address"
              label="Address"
              id="address"
              error={errors.address}
              register={{
                ...register("address", {
                  required: "Address is required",
                }),
              }}
            />
          </div>
          <div className="text-center flex flex-col justify-center items-center mt-1">
            <h1 className="text-2xl">Old Image:</h1>
            <img
              src={teacher.profileImage}
              className="w-20 h-20 object-cover rounded "
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <RadioInput
              inputs={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
                { label: "Others", value: "others" },
              ]}
              name="gender"
              register={{
                ...register("gender", {
                  required: "Gender is required",
                }),
              }}
            />
            <FileInput
              name="profileImage"
              label="Change Image"
              id="profileImage"
              error={!image && "This field is required"}
              register={{
                ...register("profileImage"),
              }}
              handleImage={handleImage}
            />
          </div>

          <Input
            type="date"
            name="joinedDate"
            label="Joined Date"
            id="joinedDate"
            error={errors.joinedDate}
            register={{
              ...register("joinedDate", {
                required: "Joined Date is required",
              }),
            }}
          />

          <div className="grid grid-cols-2 gap-2">
            <Input
              type="password"
              name="password"
              label="Password"
              id="password"
              error={errors?.password?.message}
              togglePasswordVisibility={togglePasswordVisibility}
              showPassword={showPassword}
              register={{
                ...register("password", {
                  required: "Password is required",
                }),
              }}
            />

            <Input
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              id="confirmPassword"
              error={errors?.confirmPassword?.message}
              togglePasswordVisibility={togglePasswordVisibility}
              showPassword={showPassword}
              register={{
                ...register("confirmPassword", {
                  required: "Confirm Password is required",
                }),
              }}
            />
          </div>

          <SubmitButton>Update</SubmitButton>
        </form>
      </div>
    </>
  );
};

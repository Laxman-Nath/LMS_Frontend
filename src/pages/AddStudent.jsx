import { useForm } from "react-hook-form";
import { Input } from "../components/Input";
import { SubmitButton } from "../components/SubmitButton";

import { Spinner } from "../components/Spinner";
import { ADD_STUDENT } from "../utils/Routes";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";
import { useState } from "react";
import { RadioInput } from "../components/RadioInput";
import { FileInput } from "../components/FileInput";
import { useAddStudent } from "../hooks/queries/Student/useAddStudent";
import { useGetAllDepts } from "../hooks/queries/Department/useGetAllDepts";
import { SelectInput } from "../components/SelectInput";
import { CommonForm } from "../components/CommonForm";
import { addStudentFormData } from "../utils/formData";

export const AddStudent = () => {
  const [image, setImage] = useState("");
  const { addStudent } = useAddStudent();
  const { depts, isError, isPending } = useGetAllDepts();
  const [isUploading, setIsUploading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((showPassword) => !showPassword);
  };
  const {
    register,
    handleSubmit,
    formState,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();
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
    console.log("Before", data.bookImage);
    data.profileImage = image;
    console.log("After", data.bookImage);
    addStudent({ data: data, path: ADD_STUDENT,isLogin:false,pageNumber:null ,method:"POST" });
    console.log(data);
  };
  const onError = (error) => {
    console.log(error);
  };
  return (
    <>
    <CommonForm title={addStudentFormData.title} formData={addStudentFormData.data} onSubmit={onSubmit} onError={onError} handleImage={handleImage} radioList={depts.data} isPending={isPending}/>
      {/* <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#111] to-black overflow-x-hidden">
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
         className=" shadow-xl shadow-black/70 p-8 w-full max-w-3xl bg-[#161616] border border-white/10 rounded-2xl flex flex-col gap-0 text-white mt-20"
        >
          <h2 className="font-bold text-5xl text-center rounded-md text-white ">
            Add Student
          </h2>
          <hr className="border-t border-gray-300 w-full h-2" />
          <div className="grid grid-cols-2 gap-1">
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

          <div className="grid grid-cols-2 gap-1">
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

          <div className="grid grid-cols-2 gap-1">
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
              label="Profile Image"
              id="profileImage"
              error={!image && "This field is required"}
              register={{
                ...register("profileImage"),
              }}
              handleImage={handleImage}
            />
          </div>

          <div className="grid grid-cols-2 gap-1">
            <Input
              type="number"
              name="rollNo"
              label="Roll No"
              id="rollNo"
              register={{
                ...register("rollNo", {
                  required: "Roll No is required",
                }),
              }}
            />
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
          </div>

          <div className="grid grid-cols-2 gap-1">
            <Input
              type="text"
              name="year"
              label="Year"
              id="year"
              error={errors.address}
              register={{
                ...register("year", {
                  required: "Year is required",
                }),
              }}
            />

            <Input
              type="text"
              name="semester"
              label="Semester"
              id="semester"
              error={errors.semester}
              register={{
                ...register("semester", {
                  required: "Semester is required",
                }),
              }}
            />
          </div>
          <SelectInput
            name="departmentName"
            label="Department Name"
            depts={depts.data}
            register={{
              ...register("departmentName", {
                required: "Department name is required",
              }),
            }}
          />
          <div className="grid grid-cols-2 gap-1">
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

          <SubmitButton>Add</SubmitButton>
        </form>
      </div> */}
    </>
  );
};

import { useForm } from "react-hook-form";
import { Input } from "../Login/Input";
import { SubmitButton } from "../Buttons/SubmitButton";
import { UseAddBook } from "../../Queries/UseAddBook";
import { Spinner } from "../Spinner/Spinner";
import { ADD_BOOK, ADD_STUDENT } from "../../utils/Routes";
import { uploadToCloudinary } from "../../utils/uploadToCloudinary";
import { useState } from "react";
import { RadioInput } from "../../uiutils/RadioInput";
import { FileInput } from "../../uiutils/FileInput";
import { useAddStudent } from "../../Queries/Student/useAddStudent";

export const AddStudent = () => {
  const [image, setImage] = useState("");
  const { addStudent, isError, isPending } = useAddStudent();
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
    addStudent({ data: data, path: ADD_STUDENT });
    console.log(data);
  };
  const onError = (error) => {
    console.log(error);
  };
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className=" shadow-2xl shadow-white p-4 w-[40%]  bg-primary rounded-md flex flex-col justify-center text-white"
        >
          <h1 className="font-bold text-5xl text-center rounded-md text-white ">
            Add Student
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
              label="Profile Image"
              id="profileImage"
              error={!image && "This field is required"}
              register={{
                ...register("profileImage"),
              }}
              handleImage={handleImage}
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
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

          <div className="grid grid-cols-2 gap-2">
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

          <SubmitButton>Add</SubmitButton>
        </form>
      </div>
    </>
  );
};

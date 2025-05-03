import { useState } from "react";
import { useGetAllDepts } from "../hooks/queries/Department/useGetAllDepts";
import { useAddTeacher } from "../hooks/queries/Teacher/useAddTeacher";
import { useForm } from "react-hook-form";
import { Spinner } from "../components/Spinner";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";
import { ADD_TEACHER } from "../utils/Routes";
import { Input } from "../components/Input";
import { RadioInput } from "../components/RadioInput";
import { FileInput } from "../components/FileInput";
import { SelectInput } from "../components/SelectInput";
import { SubmitButton } from "../components/SubmitButton";

export const AddTeacher = () => {
  const [image, setImage] = useState("");
  const { depts, isError, isPending } = useGetAllDepts();
  const { addTeacher } = useAddTeacher();
  const [isUploading, setIsUploading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (isError) return <div className="text-white">Something went wrong.</div>;
  if (isPending) return <Spinner />;

  const handleImage = async (event) => {
    setIsUploading(true);
    const file = event.target.files[0];
    try {
      if (file) {
        const imageUrl = await uploadToCloudinary(file, "image");
        setImage(imageUrl);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsUploading(false);
    }
  };

  const onSubmit = (data) => {
    if (isUploading) {
      console.log("Image is still uploading.");
      return;
    }
    data.profileImage = image;
    addTeacher({ data, path: ADD_TEACHER });
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#111] to-black overflow-x-hidden">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-xl shadow-black/70 p-8 w-full max-w-3xl bg-[#161616] border border-white/10 rounded-2xl flex flex-col gap-1 text-white mt-20"
      >
        <h2 className="text-center text-4xl font-extrabold mb-2 ">Add Teacher</h2>
        <hr className="border-white/20" />

        <div className="grid grid-cols-2 gap-4">
          <Input
            type="text"
            name="firstName"
            label="First Name"
            id="firstName"
            register={{
              ...register("firstName", { required: "First Name is required" }),
            }}
            error={errors.firstName}
          />
          <Input
            type="text"
            name="lastName"
            label="Last Name"
            id="lastName"
            register={{
              ...register("lastName", { required: "Last Name is required" }),
            }}
            error={errors.lastName}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Input
            type="email"
            name="email"
            label="Email"
            id="email"
            register={{
              ...register("email", { required: "Email is required" }),
            }}
            error={errors.email}
          />
          <Input
            type="text"
            name="address"
            label="Address"
            id="address"
            register={{
              ...register("address", { required: "Address is required" }),
            }}
            error={errors.address}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <RadioInput
            inputs={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Others", value: "others" },
            ]}
            name="gender"
            register={{
              ...register("gender", { required: "Gender is required" }),
            }}
          />
          <FileInput
            name="profileImage"
            label="Profile Image"
            id="profileImage"
            error={!image && "Image is required"}
            register={{ ...register("profileImage") }}
            handleImage={handleImage}
          />
        </div>

        <Input
          type="date"
          name="joinedDate"
          label="Joined Date"
          id="joinedDate"
          register={{
            ...register("joinedDate", {
              required: "Joined Date is required",
            }),
          }}
          error={errors.joinedDate}
        />

        <SelectInput
          name="departmentName"
          label="Department Name"
          depts={depts.data}
          register={{
            ...register("departmentName", {
              required: "Department is required",
            }),
          }}
        />

        <div className="grid grid-cols-2 gap-4">
          <Input
            type="password"
            name="password"
            label="Password"
            id="password"
            togglePasswordVisibility={togglePasswordVisibility}
            showPassword={showPassword}
            register={{
              ...register("password", { required: "Password is required" }),
            }}
            error={errors.password}
          />
          <Input
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            id="confirmPassword"
            togglePasswordVisibility={togglePasswordVisibility}
            showPassword={showPassword}
            register={{
              ...register("confirmPassword", {
                required: "Confirm Password is required",
              }),
            }}
            error={errors.confirmPassword}
          />
        </div>

        <SubmitButton>Add Teacher</SubmitButton>
      </form>
    </div>
  );
};

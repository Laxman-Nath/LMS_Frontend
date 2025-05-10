/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useUpdateDept } from "../../hooks/queries/Department/useUpdateDept";
import { Spinner } from "../Spinner";
import { UPDATE_DEPT } from "../../utils/Routes";
import { HiXMark } from "react-icons/hi2";
import { Input } from "../Input";
import { SubmitButton } from "../SubmitButton";

export const EditDepartmentForm = ({ entry, onClick }) => {
  const { updateDept, isError, isPending } = useUpdateDept();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: entry?.name,
      departmentHead: entry?.departmentHead,
    },
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <div className="text-red-500 text-center">An error occurred while updating the department.</div>
    );
  }

  const onSubmit = (data) => {
    updateDept({ data, path: `${UPDATE_DEPT}?departmentId=${entry.id}`,isLogin:false,method:"PUT",pageNumber:null  });
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center mt-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-2xl shadow-white p-4 w-[40%] bg-primary rounded-md flex flex-col justify-center text-white"
      >
        <button
          className="text-white border-none mt-2 ml-0 rounded-sm translate-x-2 transition-all duration-200"
          onClick={onClick}
        >
          <HiXMark className="w-8 h-8 text-white hover:text-gray-900" />
        </button>
        <h1 className="font-bold text-5xl text-center rounded-md text-green-500">
          Update Department
        </h1>
        <hr className="border-t border-gray-300 w-full h-2" />

        <Input
          type="text"
          name="name"
          label="Department Name"
          id="name"
          register={{
            ...register("name", {
              required: "Department Name is required",
            }),
          }}
          error={errors.name}
        />

        <Input
          type="text"
          name="departmentHead"
          label="Department Head"
          id="departmentHead"
          register={{
            ...register("departmentHead", {
              required: "Department head is required",
            }),
          }}
        />

        <SubmitButton>Update</SubmitButton>
      </form>
    </div>
  );
};

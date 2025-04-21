
import { useForm } from "react-hook-form";
import { SubmitButton } from "../../uiutils/SubmitButton";
import { Input } from "../../uiutils/Input";
import { useAddDept } from "../../Queries/Department/useAddDept";
import { Spinner } from "../../uiutils/Spinner";
import { ADD_DEPT } from "../../utils/Routes";

export const AddDepartment = () => {
  
    const {
      register,
      handleSubmit,
      formState,
      getValues,
      setValue,
      formState: { errors },
    } = useForm();
    const {addDept,isError,isPending}=useAddDept();
    if (isError) {
      console.log("error");
    }
    if (isPending) {
      return <Spinner />;
    }
    
    const onSubmit = (data) => {

      addDept({ data: data, path: ADD_DEPT });
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
              Add Department
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
            
  
  
            <SubmitButton>Add</SubmitButton>
          </form>
        </div>
      </>
    );
};

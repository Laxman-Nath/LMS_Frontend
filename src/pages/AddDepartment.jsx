
import { useForm } from "react-hook-form";
import { useAddDept } from "../hooks/queries/Department/useAddDept";
import { Spinner } from "../components/Spinner";
import { ADD_DEPT } from "../utils/Routes";
import { Input } from "../components/Input";
import { SubmitButton } from "../components/SubmitButton";


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
        <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#111] to-black overflow-x-hidden overflow-y-hidden">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-xl shadow-black/70 p-8 w-full max-w-3xl bg-[#161616] border border-white/10 rounded-2xl flex flex-col gap-1 text-white"
      >
        <h2 className="text-center text-4xl font-extrabold mb-2 ">Add Department</h2>
        <hr className="border-white/20" />
            
          
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

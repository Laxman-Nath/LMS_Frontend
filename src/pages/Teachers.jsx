import { useGetAllTeachers } from "../hooks/queries/Teacher/useGetAllTeachers";
import { Spinner } from "../components/Spinner";
import { TeacherTable } from "../components/Teachers/TeacherTable"

export const Teachers=()=>{
     const { teachers, isPending, isError, error } = useGetAllTeachers();
         if (isPending) {
            return <Spinner />;
          }
          console.log("Teachers from teachers", teachers);
        
          if (isError) {
            console.log(error);
          }
    return (
        <TeacherTable teachers={teachers}/>
    )
}
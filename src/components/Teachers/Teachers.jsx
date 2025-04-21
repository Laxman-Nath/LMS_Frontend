import { useGetAllTeachers } from "../../Queries/Teacher/useGetAllTeachers";
import { Spinner } from "../../uiutils/Spinner";
import { TeacherTable } from "./TeacherTable"

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
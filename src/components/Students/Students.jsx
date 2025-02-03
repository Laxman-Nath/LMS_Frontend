import { useGetAllStudents } from "../../Queries/Student/useGetAllStudents";
import { Spinner } from "../../uiutils/Spinner";
import { StudentTable } from "./StudentTAble"

export const Students=()=>{
    const { students, isPending, isError, error } = useGetAllStudents();
     if (isPending) {
        return <Spinner />;
      }
      console.log("Students from students", students);
    
      if (isError) {
        console.log(error);
      }
    return <StudentTable students={students}/>
}
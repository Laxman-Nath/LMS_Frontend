import { useGetAllStudents } from "../hooks/queries/Student/useGetAllStudents";
import { Spinner } from "../components/Spinner";
import { StudentTable } from "../components/Students/StudentTAble"

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
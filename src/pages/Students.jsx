import { useGetAllStudents } from "../hooks/queries/Student/useGetAllStudents";
import { Spinner } from "../components/Spinner";
import { StudentTable } from "../components/Students/StudentTAble"
import { useDeleteStudent } from "../hooks/queries/Student/useDeleteStudent";
import { DELETE_STUDENT } from "../utils/Routes";
import { EditStudentForm } from "../components/Students/EditStudentForm";
import { Table } from "../components/Table/Table";

export const Students=()=>{
    const { students, isPending, isError, error } = useGetAllStudents();
    const { deleteStudent, isPending:isDeletePending, isError:isDeleteError, error:deleteError } = useDeleteStudent();
     if (isPending) {
        return <Spinner />;
      }
      console.log("Students from students", students);
    
      if (isError) {
        console.log(error);
      }
    return <Table columnNamesForHead={[
      "RollNo",
      "FirstName",
      "LastName",
      "Email",
      "Address",
      "Gender",
      "JoinedDate",
      "Year",
      "Semester",
      "Profile",
    ]} columnNamesForBody={[
      "rollNo",
      "firstName",
      "lastName",
      "email",
      "address",
      "gender",
      "joinedDate",
      "year",
      "semester",
      "profileImage",
    ]} data={students.data} totalPage={students.totalPage} pageNumber={students.pageNumber}
                                  isPending={isDeletePending} deleteApi={deleteStudent} deleteRoute={DELETE_STUDENT} editForm={EditStudentForm} />
                      
}
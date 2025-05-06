import { useGetAllTeachers } from "../hooks/queries/Teacher/useGetAllTeachers";
import { Spinner } from "../components/Spinner";
import { TeacherTable } from "../components/Teachers/TeacherTable"
import { Table } from "../components/Table/Table";
import { DELETE_TEACHER } from "../utils/Routes";
import { EditTeacherForm } from "../components/Teachers/EditTeacherForm";
import { useDeleteTeacher } from "../hooks/queries/Teacher/useDeleteTeacher";

export const Teachers=()=>{
     const { teachers, isPending, isError, error } = useGetAllTeachers();
     const{deleteTeacher,isPending:isDeletePending, isError:isDeleteError, error : deleteError } = useDeleteTeacher();
         if (isPending) {
            return <Spinner />;
          }
          console.log("Teachers from teachers", teachers);
        
          if (isError) {
            console.log(error);
          }
    return (
        <Table columnNamesForHead={[
                
          "FirstName",
          "LastName",
          "Email",
          "Address",
          "Gender",
          "JoinedDate",
        
          "Profile",
        ]} columnNamesForBody={[
                  
          "firstName",
          "lastName",
          "email",
          "address",
          "gender",
          "joinedDate",
         
          "profileImage",
        ]} data={teachers.data} totalPage={teachers.totalPage} pageNumber={teachers.pageNumber}
                              isPending={isDeletePending} deleteApi={deleteTeacher} deleteRoute={DELETE_TEACHER} editForm={EditTeacherForm} />
                  
    )
}
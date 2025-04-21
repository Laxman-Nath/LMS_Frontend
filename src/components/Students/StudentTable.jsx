/* eslint-disable react/prop-types */
import { StudentTableBody } from "./StudentTableBody";
import { StudentTableFooter } from "./StudentTableFooter";
import { StudentTableHeader } from "./StudentTableHeader";

export const StudentTable = ({students}) => {
  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <StudentTableHeader
            columnNames={[
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
            ]}
          />

          <StudentTableBody  columnNames={[
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
            ]}
            students={students.data}
            />
            <StudentTableFooter totalPage={students.totalPage} pageNumber={students.pageNumber}/>
        </table>
      </div>
    </>
  );
};

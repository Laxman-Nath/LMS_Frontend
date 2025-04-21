/* eslint-disable react/prop-types */
import { TeacherTableBody } from "./TeacherTableBody";
import { TeacherTableFooter } from "./TeacherTableFooter";
import { TeacherTableHeader } from "./TeacherTableHeader";

export const TeacherTable=({teachers})=>{
      return ( <><div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <TeacherTableHeader
                columnNames={[
                
                  "FirstName",
                  "LastName",
                  "Email",
                  "Address",
                  "Gender",
                  "JoinedDate",
                
                  "Profile",
                ]}
              />
    
              <TeacherTableBody  columnNames={[
                  
                  "firstName",
                  "lastName",
                  "email",
                  "address",
                  "gender",
                  "joinedDate",
                 
                  "profileImage",
                ]}
                teachers={teachers.data}
                />
                <TeacherTableFooter totalPage={teachers.totalPage} pageNumber={teachers.pageNumber}/>
            </table>
          </div>
        </>
      );
}
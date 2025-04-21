/* eslint-disable react/prop-types */
import { DepartmentTableBody } from "./DepartmentTableBody";
import { DepartmentTableFooter } from "./DepartmentTableFooter";
import { DepartmentTableHeader } from "./DepartmentTableHeader";

export const DepartmentTable=({depts})=>{
  console.log("dept inside dept table",depts);
 return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <DepartmentTableHeader
            columnNames={[
              "Department Name",
              "HOD",
              
            ]}
          />

          <DepartmentTableBody  columnNames={[
              "name",
              "departmentHead",
             
            ]}
            depts={depts.data}
            />
            <DepartmentTableFooter totalPage={depts.totalPage} pageNumber={depts.pageNumber}/>
        </table>
      </div>
    </>
  );
}
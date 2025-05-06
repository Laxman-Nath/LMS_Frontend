import { EditDepartmentForm } from "../components/Department/EditDepartmentForm";
import { Spinner } from "../components/Spinner";
import { Table } from "../components/Table/Table";
import { useDeleteDept } from "../hooks/queries/Department/useDeleteDept";
import { useGetAllDepts } from "../hooks/queries/Department/useGetAllDepts";
import { DELETE_DEPT } from "../utils/Routes";

export const Departments = () => {
  const { depts, isError: isGetError, isPending: isGetPending, error: getError } = useGetAllDepts();
  const { deleteDept, isPending: isDeletePending, isError: isDeleteError, error: deleteError } = useDeleteDept();

  if (isGetPending || isDeletePending) {
    return <Spinner />;
  }

  if (isGetError) {
    return <div className="text-red-500 text-center">Failed to fetch departments: {getError?.message || "Unknown error"}</div>;
  }

  if (isDeleteError) {
    return <div className="text-red-500 text-center">Failed to delete department: {deleteError?.message || "Unknown error"}</div>;
  }

  if (!depts || !depts.data || depts.data.length === 0) {
    return <div className="text-center text-gray-500">No departments available.</div>;
  }

  return (
      <Table
        columnNamesForHead={["Department Name", "HOD"]}
        columnNamesForBody={["name", "departmentHead"]}
        data={depts.data}
        totalPage={depts.totalPage}
        pageNumber={depts.pageNumber}
        isPending={isDeletePending}
        deleteApi={deleteDept}
        deleteRoute={DELETE_DEPT}
        editForm={EditDepartmentForm}
      />
  );
};

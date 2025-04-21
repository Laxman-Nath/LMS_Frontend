import { useGetAllDepts } from "../../Queries/Department/useGetAllDepts"
import { Spinner } from "../../uiutils/Spinner";
import { DepartmentTable } from "./DepartmentTable";

export const Departments=()=>{
    const {depts,isError,isPending,error}=useGetAllDepts();
    console.log("depts",depts);
    if(isPending){
        return <Spinner/>
    }
    if(isError){
        console.log(error);
    }
    return (
        <DepartmentTable depts={ depts}/>
    )

}
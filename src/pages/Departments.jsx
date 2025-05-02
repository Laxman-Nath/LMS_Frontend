

import { DepartmentTable } from "../components/Department/DepartmentTable";
import { Spinner } from "../components/Spinner";
import { useGetAllDepts } from "../hooks/queries/Department/useGetAllDepts";


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
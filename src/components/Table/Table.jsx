/* eslint-disable react/prop-types */
import { TableBody } from "./TableBody"
import { TableFooter } from "./TableFooter"
import { TableHead } from "./TableHead"

export const Table=({data,columnNamesForHead,columnNamesForBody,pageNumber, totalPage,isPending,deleteRoute,deleteApi,editRoute,editApi,editForm })=>{
    return (
        
<div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border ml-72">
  <table className="w-full text-left table-auto min-w-max">
     <TableHead columnNames={columnNamesForHead}/>
     <TableBody columnNames={columnNamesForBody} data={data} isPending={isPending} deleteApi={deleteApi} deleteRoute={deleteRoute} editForm={editForm}/>
     <TableFooter pageNumber={pageNumber} totalPage={totalPage}/> 
  </table>
  </div>
    )
}
/* eslint-disable react/prop-types */
export const DepartmentTableHeader=({columnNames})=>{
    return <>
     <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        {columnNames.map((name,index) => (
          <th key={index} scope="col" className="px-6 py-3 text-center">
            {name}
          </th>
        ))}
        <th className="px-6 py-3 text-center">Action</th>
      </tr>
    </thead>
    </>
}
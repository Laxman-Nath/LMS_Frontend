/* eslint-disable react/prop-types */
export const TableHead=({columnNames})=>{
return (<thead>
    <tr>
        {columnNames.map((column,index)=>(
            <th key={index} className="p-4 border-b border-slate-200 bg-slate-50">
            <p className="text-sm font-normal leading-none text-slate-500">
              {column}
            </p>
          </th>
        ))}
        <th className="p-4 border-b border-slate-200 bg-slate-50">
              <p className="text-sm font-normal leading-none text-slate-500">
                Action
              </p>
            </th>
         </tr>
  </thead>
)
}
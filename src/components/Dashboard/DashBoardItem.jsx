import { NavLink } from "react-router-dom"

export const DashboardItem=({icon,title,path})=>{
    return <>
    <li className="flex justify-start mb-4 text-center cursor-pointer hover:text-gray-400">
       <span className="text-3xl mr-2">{icon}</span> 
        <NavLink to={path} className={({isActive})=>`text-2xl ${isActive?"scale-110 text-green-500 rounded-md transition-all duration-1000 ease-in-out":""}`}>{title}</NavLink>
    </li>
    </>
}
import { FaEyeSlash, FaEye } from "react-icons/fa";
export const ShowHidePassword=({togglePasswordVisibility,showPassword})=>{
    console.log(togglePasswordVisibility,showPassword);
    return  <div
    onClick={togglePasswordVisibility}
    className="relative right-[-32%] top-[-32px] transform  text-gray-400 cursor-pointer"
  >
    {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
  </div>
}
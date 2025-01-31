import { ShowHidePassword } from "../../utils/ShowHidePassword";


export const Input = ({ label, type, id, name, error, register,showPassword,togglePasswordVisibility,onChange }) => {
    // console.log(label, type, id, name, error, register);
  //  console.log(showPassword,togglePasswordVisibility)
   return (
      <div
        className={`flex flex-col items-center `}
      >
        <label htmlFor={id} className="text-2xl">
          {label}
        </label>
        <input
          type={
            type === "password"
              ? ( showPassword ? "text" : "password")
              :type
          }
         
          onChange={onchange}
          rows={type==="textarea"?10:undefined}
          cols={type==="textarea"?40:undefined}
          name={name}
          id={id}
          
          className=" h-17 text-sm border-2 border-black rounded-md outline-none p-2 hover:scale-90 transition-all ease-in-out duration-[1200ms] w-[70%] text-black"
          {...register}
        />
        {type === "password" && 
         <ShowHidePassword
            togglePasswordVisibility={togglePasswordVisibility}
            showPassword={showPassword}
          />
        }
        
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>
    );
  };
  
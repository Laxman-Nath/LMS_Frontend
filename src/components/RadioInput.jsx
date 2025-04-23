/* eslint-disable react/prop-types */
export const RadioInput=({inputs,name,register,error})=>{
    return (
    <div className="flex justify-center items-center text-2xl p-2">
        {
            inputs.map((i,index)=>(
                <label className="m-2" key={index}>{i.label}
                <input type="radio" name={name} value={i.value}  className=" h-17 text-sm border-2 border-black rounded-md outline-none p-2 hover:scale-90 transition-all ease-in-out duration-[1200ms] w-[70%] text-black" {...register}/>
            </label>
            ))
        }
       {error && <span className="text-red-500 text-sm">{error}</span>}
     </div> 
    )  
}

 /* <label className="m-2">Male:
            <input type="radio" name="gender" value="male"  className=" h-17 text-sm border-2 border-black rounded-md outline-none p-2 hover:scale-90 transition-all ease-in-out duration-[1200ms] w-[70%] text-black"/>
        </label>
        <label className="m-2">Female:
            <input type="radio" name="gender" value="female"  className=" h-17 text-sm border-2 border-black rounded-md outline-none p-2 hover:scale-90 transition-all ease-in-out duration-[1200ms] w-[70%] text-black"/>
        </label>
        <label className="m-2">Others:
            <input type="radio" name="gender" value="others"  className=" h-17 text-sm border-2 border-black rounded-md outline-none p-2 hover:scale-90 transition-all ease-in-out duration-[1200ms] w-[70%] text-black"/>
        </label>*/
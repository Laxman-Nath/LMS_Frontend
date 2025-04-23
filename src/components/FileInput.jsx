/* eslint-disable react/prop-types */
export const FileInput=({label,name,register,error,handleImage})=>{
    return(
    <div className="text-center flex flex-col justify-center items-center text-2xl p-2">
    <label className="">{label}</label>
    <hr />
    <input
      type="file"
      name="Image"
      id="Image"
      onChange={handleImage}
      accept="image/*"
      className=" h-17 text-sm border-2 border-white rounded-md outline-none p-2 hover:scale-90 hover:cursor-pointer transition-all ease-in-out duration-[1200ms] w-[70%] text-white"
    />
    <input
      type="hidden"
      name={name}
      id={name}
     {...register}
    />
     {error && <span className="text-sm text-red-500">{error.message}</span>}
  </div>
    )
}
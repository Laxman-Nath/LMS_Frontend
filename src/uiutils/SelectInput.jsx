/* eslint-disable react/prop-types */
export const SelectInput = ({
  depts,
  label,
  name,
  register,
  error,
  
}) => {
  return (
    <div className={`flex flex-col items-center `}>
      <label className="text-2xl text-white">{label}</label>
      <select {...register} name={name}         className=" h-17 text-sm border-2 border-black rounded-md outline-none p-2 hover:scale-90 transition-all ease-in-out duration-[1200ms] w-[70%] text-black">
        {depts.map((dept, index) => (
          <option key={index} value={dept.name}>
            {dept.name}
          </option>
        ))}
      </select>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

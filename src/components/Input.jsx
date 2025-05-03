import { ShowHidePassword } from "./ShowHidePassword";

export const Input = ({
  label,
  type = "text",
  id,
  name,
  error,
  register,
  showPassword,
  togglePasswordVisibility,
  onChange,
}) => {
  const isPassword = type === "password";
  const isTextarea = type === "textarea";

  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={id} className="text-lg font-semibold text-white">
        {label}
      </label>

      {isTextarea ? (
        <textarea
          name={name}
          id={id}
          rows={6}
          cols={40}
          onChange={onChange}
          className="text-sm border border-black rounded-md p-3 text-black focus:ring-2 focus:ring-blue-500 focus:outline-none w-full resize-none"
          {...register}
        />
      ) : (
        <div className="relative w-full">
          <input
            type={isPassword ? (showPassword ? "text" : "password") : type}
            name={name}
            id={id}
            onChange={onChange}
            className="text-sm border border-black rounded-md p-3 text-black focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"
            {...register}
          />
          {isPassword && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
              <ShowHidePassword
                togglePasswordVisibility={togglePasswordVisibility}
                showPassword={showPassword}
              />
            </div>
          )}
        </div>
      )}

      {error && (
        <span className="text-red-500 text-sm font-medium">{error}</span>
      )}
    </div>
  );
};

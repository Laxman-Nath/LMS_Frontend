import { CommonForm } from "../components/CommonForm";
import { LoginForm } from "../components/Login/LoginForm";
import { useLogin } from "../hooks/queries/auth/useLogin";
import { loginFormData } from "../utils/formData";
import { LOGIN } from "../utils/Routes";

export const LoginPage = () => {
    const{login,isPending,isError}=useLogin();
  const onSubmit = (data) => {
    
      login({data,isLogin:true,method:"POST",path:LOGIN,pageNumber:null});
      console.log(data);
    };
    const onError = (error) => {
      console.log(error);
    };
  return (
    <div className="h-screen flex justify-around items-center bg-gradient-to-r from-gray-800 via-gray-900 to-black">
        <div className="w-full max-w-md p-6">
        {/* Welcome text */}
        <div className="text-center mb-6 text-white">
          <h2 className="text-4xl font-semibold">Welcome to the Library Management System</h2>
          <p className="mt-2 text-lg">Please sign in to continue</p>
          <p className="mt-4 text-xl font-medium italic">"Your Gateway to Knowledge"</p>
        </div>
        </div>
      {/* <LoginForm /> */}
      <CommonForm title={loginFormData.title} formData={loginFormData.data} onSubmit={onSubmit} onError={onError}/>
    </div>
  );
};

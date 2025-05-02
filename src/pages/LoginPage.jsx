import { LoginForm } from "../components/Login/LoginForm";

export const LoginPage = () => {
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
      <LoginForm />
      
    </div>
  );
};

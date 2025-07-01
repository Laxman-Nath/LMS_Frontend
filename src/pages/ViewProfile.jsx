import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export const ViewProfile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  if (!user) {
    navigate("/login");
  }
  console.log("Profile Image:", user.profileImage);
  return (
    <>
      <div className="border-2 rounded-md m-2 p-5 border-white flex flex-col justify-center items-center gap-2">
        <div className="text-center ">
          <img src={user?.profileImage} className="h-50 w-40 rounded-lg" />
          
        </div>
       
        <div className="space-y-2">
             <hr className="border-t-3 border-gray-300 my-4 w-full" />
          <p>
            <strong>Name:</strong>
            {user?.firstName} {user?.lastName}
          </p>
          <p>
            <strong>Email:</strong>
            {user?.email}
          </p>
          <p>
            <strong>Address:</strong>
            {user?.address}
          </p>
          <p>
            <strong>Gender:</strong>
            {user?.gender}
          </p>
        </div>
      </div>
    </>
  );
};

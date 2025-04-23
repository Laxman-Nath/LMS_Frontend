import { getToken } from "../utils/Token"

export const deleteApi=async({path})=>{
const token=getToken();
try
{
       const response = await fetch(path, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
    
        if (response.status === 200) {
          const data = await response.json();
          return data;
        }
        const errBody = await response.json();
        throw new Error(errBody.message || "Something went wrong!");
}
catch(error){
    if (typeof error.message === "string") {
        throw new Error(error.message);
      }
      throw new Error("Something went wrong!");
    }
}

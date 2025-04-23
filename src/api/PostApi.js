import { ADD_BOOK } from "../utils/Routes";
import { getToken } from "../utils/Token"

export const postApi=async({data,path})=>{
    console.log("Path:",path);
    console.log("data",data);
   const token=getToken();
   try {
    const response=await fetch(path,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:`Bearer ${token}`
                },
                body:JSON.stringify(data)
            });
    
            if(response.status===200){
                console.log("Response from add book:",response);
                const data=await response.json();
                return data;
            }
            const errBody=await response.json();
            throw new Error(errBody.message || "Something went wrong!");
   } catch (error) {
    if(typeof error.message==="string"){
        throw new Error(error.message)

    }

    throw new Error("Something went wrong");
   }
}
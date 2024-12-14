import { LOGIN } from "../utils/Routes";


export const LoginApi=async(data)=>{
    try{
        const response=await fetch(LOGIN,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data),
        })

        if(response.status===200){
            const body=await response.json();
            return body;
        }

        const errorBody = await response.json();
        throw new Error(errorBody.message || "An unknown error occurred");
    }
    catch(error){
        console.log("Error during login:",error);
        if(typeof error.messsage==="string"){
            throw new Error(error.messsage);
        }
        throw new Error("Something went wrong!");
    }
}
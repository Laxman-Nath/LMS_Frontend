import { ADD_BOOK } from "../utils/Routes";
import { getToken } from "../utils/Token";

export const addBookApi=async(data)=>{
const token=getToken();
    try {
        const response=await fetch(ADD_BOOK,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${token}`
            },
            body:JSON.stringify(data)
        });

        if(response.status===200){
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
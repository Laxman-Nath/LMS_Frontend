import { getToken } from "../utils/Token";

export const getAllApi=async({pageNumber,path})=>{
    const token = getToken();
    console.log("Path inside api call",path);
    // `${VIEW_ALL_BOOKS}?pageSize=5&sortingOrder=descending&sortParameter=addedDate`
      try {
        const response = await fetch(
          `${path}&pageNo=${pageNumber}`, 
        //  "http://localhost:8080/lms/librarian/getallstudents?pageSize=5&sortingOrder=descending&sortParameter=addedDate&pageNo=1",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
    
        if (response.status === 200) {
          const data = await response.json();
          return data;
        }
    
        
        const errBody = await response.json();
        throw new Error(errBody.message || "Something went wrong");
      } catch (error) {
        
        if (typeof error.message === "string") {
          throw new Error(error.message);
        }
        throw new Error("Something went wrong");
      }
}
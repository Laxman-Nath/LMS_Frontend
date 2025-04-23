import { getToken } from "../utils/Token";

export const editApi=async({data,path})=>{
    console.log("Data",data);
    console.log("Path",path);
    const token = getToken();
      try {
        const response = await fetch(path, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        });
        if (response.status === 200) {
          const data = await response.json();
          return data;
        }
        const errBody = await response.json();
        throw new Error(errBody.message || "Something went wrong!");
      } catch (error) {
        if (typeof error.message === "string") {
          throw new Error(error.message);
        }
        throw new Error("Something went wrong!");
      }
}
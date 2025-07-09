import { getToken } from "../utils/Token";

export const commonApi = async ({
  path,
  method,
  isLogin,
  data,
  pageNumber,
  isQueryParam,
  paramString
}) => {
  console.log("Page number",pageNumber);
  
  try {
    const token = getToken();
    let response;
    switch (method) {
      case "POST":
        response = await fetch(isQueryParam?path+'?'+paramString+'='+data:path, {
          method: method ,
          headers: {
            "Content-Type": "application/json",
            ...(!isLogin && { Authorization: `Bearer ${token}` }),
          },
          body: JSON.stringify(data),
        });
        break;
      case "GET":
        console.log("Inside get case");
        response = await fetch(
          pageNumber === null ? path : `${path}&pageNo=${pageNumber}`,
          {
            method:  method ,
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        break;
      case "DELETE":
        response = await fetch(path, {
          method: method ,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        break;
      case "PUT":
        response = await fetch(isQueryParam?path+'?'+paramString+'='+data:path, {
          method: method ,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        });
        break;
    }
    console.log("Response inside api call",response);
    if (response?.status === 200) {
      const data = await response.json();
      console.log("Data after parsing",data);
      return data;
    }
    const errBody = await response.json();
    throw new Error(errBody.message || "Something went wrong!");
  } catch (error) {
    console.log("Error inside api call:",error)
    if (typeof error.message === "string") {
      throw new Error(error.message);
    }
    throw new Error("Something went wrong!");
  }
};

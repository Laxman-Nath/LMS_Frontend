import { getToken } from "../utils/Token";

export const commonApi = async ({
  path,
  method,
  isLogin,
  data,
  pageNumber,
}) => {
  try {
    const token = getToken();
    let response;
    switch (method) {
      case "POST":
        response = await fetch(path, {
          method: method ,
          headers: {
            "Content-Type": "application/json",
            ...(!isLogin && { Authorization: `Bearer ${token}` }),
          },
          body: JSON.stringify(data),
        });
        break;
      case "GET":
        response = await fetch(
          pageNumber !== null ? path : `${path}&pageNo=${pageNumber}`,
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
        response = await fetch(path, {
          method: method ,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        });
        break;
    }
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
};

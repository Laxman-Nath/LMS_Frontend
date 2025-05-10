import { GET_AUTHENTICATED_USER } from "../utils/Routes";
import { getToken } from "../utils/Token";

export const getLoggedInUserApi = async () => {
  const token = getToken();
  console.log("token",token);
  try {
    const response = await fetch(GET_AUTHENTICATED_USER, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status == 200) {
      const data = await response.json();
      return data;
    }
    const errorBody = await response.json();
    throw new Error(errorBody.message || "An unknown error occurred");
  } catch (error) {
    if (typeof error.message === "string") {
      throw new Error(error.message);
    }
    throw new error("Something went wrong!");
  }
};

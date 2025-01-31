import { VIEW_ALL_BOOKS } from "../utils/Routes";
import { getToken } from "../utils/Token";

export const viewAllBooks = async ({pageNumber}) => {
  // console.log("PageNumber inside api",pageNumber);
  const token = getToken();
  try {
    const response = await fetch(
      `${VIEW_ALL_BOOKS}?pageNo=${pageNumber}&pageSize=5&sortingOrder=descending&sortParameter=addedDate`,  // Corrected string interpolation
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

    // If the response status isn't 200, handle the error
    const errBody = await response.json();
    throw new Error(errBody.message || "Something went wrong");
  } catch (error) {
    // Handle different types of errors
    if (typeof error.message === "string") {
      throw new Error(error.message);
    }
    throw new Error("Something went wrong");
  }
};

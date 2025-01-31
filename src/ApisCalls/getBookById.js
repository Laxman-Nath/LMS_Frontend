import { VIEW_BOOK_BY_ID } from "../utils/Routes";
import { getToken } from "../utils/Token";

export const getBookById = async ({ bookId }) => {
  const token = getToken();
  try {
    const response = await fetch(`${VIEW_BOOK_BY_ID}?bookId=${bookId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token} `,
      },
    });

    if (response.status === 200) {
      const data = response.json();
      return data;
    }
    const errBody = await response.json();
    throw new Error(errBody.message || "Something went wrong!");
  } catch (error) {
    if (typeof error.message === "string") {
      throw error;
    }
    throw new Error("Something went wrong!");
  }
};

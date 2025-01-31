import { UPDATE_BOOK } from "../utils/Routes";
import { getToken } from "../utils/Token";

export const updateBook = async ({ data, bookId }) => {
  console.log("data", data);
  console.log("Book id inside api:", bookId);
  const token = getToken();
  try {
    const response = await fetch(`${UPDATE_BOOK}?bookId=${bookId}`, {
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
};

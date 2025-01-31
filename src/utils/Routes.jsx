export const BASE_URL = "http://localhost:8080/lms";
export const LIBRARIAN = "/librarian";
export const USER = "/user";

export const LOGIN = BASE_URL + "/login";
export const GET_AUTHENTICATED_USER=BASE_URL+"/getauthenticateduser";

export const ADD_BOOK = BASE_URL + LIBRARIAN + "/addbook";
export const VIEW_ALL_BOOKS = BASE_URL + LIBRARIAN + "/getallbooks";
export const VIEW_BOOK_BY_ID = BASE_URL + LIBRARIAN + "/getbookbyid";
export const UPDATE_BOOK = BASE_URL + LIBRARIAN + "/updatebook";
export const DELETE_BOOK = BASE_URL + LIBRARIAN + "/deletebook";

export const ADD_STUDENT = BASE_URL + LIBRARIAN + "/addstudent";

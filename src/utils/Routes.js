export const BASE_URL = "http://localhost:8080/lms";
export const LIBRARIAN = "/librarian";
export const USER = "/user";

export const LOGIN = BASE_URL + "/login";
export const GET_AUTHENTICATED_USER = BASE_URL + "/getauthenticateduser";

export const ADD_BOOK = BASE_URL + LIBRARIAN + "/addbook";
export const VIEW_ALL_BOOKS = BASE_URL + "/getallbooks";
export const VIEW_BOOK_BY_ID = BASE_URL + LIBRARIAN + "/getbookbyid";
export const UPDATE_BOOK = BASE_URL + LIBRARIAN + "/updatebook";
export const DELETE_BOOK = BASE_URL + LIBRARIAN + "/deletebook";

export const ADD_STUDENT = BASE_URL + LIBRARIAN + "/addstudent";
export const VIEW_ALL_STUDENTS = BASE_URL + LIBRARIAN + "/getallstudents";
export const UPDATE_STUDENT = BASE_URL + LIBRARIAN + "/updatestudent";
export const DELETE_STUDENT = BASE_URL + LIBRARIAN + "/deletestudent";

export const ADD_TEACHER = BASE_URL + LIBRARIAN + "/addteacher";
export const VIEW_ALL_TEACHERS = BASE_URL + LIBRARIAN + "/getallteachers";
export const UPDATE_TEACHER = BASE_URL + LIBRARIAN + "/updateteacher";
export const DELETE_TEACHER = BASE_URL + LIBRARIAN + "/deleteteacher";

export const ADD_DEPT = BASE_URL + LIBRARIAN + "/addept";
export const VIEW_ALL_DEPTS = BASE_URL + LIBRARIAN + "/getalldepts";
export const UPDATE_DEPT = BASE_URL + LIBRARIAN + "/updatedept";
export const DELETE_DEPT = BASE_URL + LIBRARIAN + "/deletedept";

export const BORROW_BOOK = BASE_URL + USER + "/borrowbook";
export const RETURN_BOOK = BASE_URL + USER + "/returnbook";
export const GET_ALL_BORROWED_BOOKS_OF_AUTH_USER =
  BASE_URL + USER + "/getAllBorrowedBooks";

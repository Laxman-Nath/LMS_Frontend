export const loginFormData = {
  title: "LOGIN",
  data: [
    {
      label: "UserName",
      id: "email",
      name: "email",
      type: "email",
      validation: "Email is required",
    },
    {
      label: "Password",
      id: "password",
      name: "password",
      type: "password",
      validation: "Password is required",
    },
  ],
};

export const addTeacherFormData = {
  title: "Add Teacher",
  data: [
    {
      label: "First Name",
      id: "firstName",
      name: "firstName",
      type: "text",
      validation: "First Name is required",
    },
    {
      label: "Last Name",
      id: "lastName",
      name: "lastName",
      type: "text",
      validation: "Last Name is required",
    },
    {
      label: "Email",
      id: "email",
      name: "email",
      type: "email",
      validation: "Email is required",
    },
    {
      label: "Address",
      id: "address",
      name: "address",
      type: "text",
      validation: "Address is required",
    },
    {
      label: "Gender",
      id: "gender",
      name: "gender",
      type: "radio",
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Others", value: "others" },
      ],
      validation: "Gender is required",
    },
    {
      label: "Profile Image",
      id: "profileImage",
      name: "profileImage",
      type: "file",
      validation: "Image is required",
    },
    {
      label: "Joined Date",
      id: "joinedDate",
      name: "joinedDate",
      type: "date",
      validation: "Joined Date is required",
    },
    {
      label: "Department Name",
      id: "departmentName",
      name: "departmentName",
      type: "select",
      validation: "Department is required",
    },
  ],
};

export const addStudentFormData = {
  title: "Add Student",
  data: [
    {
      label: "First Name",
      id: "firstName",
      name: "firstName",
      type: "text",
      validation: "First Name is required",
    },
    {
      label: "Last Name",
      id: "lastName",
      name: "lastName",
      type: "text",
      validation: "Last Name is required",
    },
    {
      label: "Email",
      id: "email",
      name: "email",
      type: "email",
      validation: "Email is required",
    },
    {
      label: "Address",
      id: "address",
      name: "address",
      type: "text",
      validation: "Address is required",
    },
    {
      label: "Gender",
      id: "gender",
      name: "gender",
      type: "radio",
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Others", value: "others" },
      ],
      validation: "Gender is required",
    },
    {
      label: "Profile Image",
      id: "profileImage",
      name: "profileImage",
      type: "file",
      validation: "Image is required",
    },
    {
      label: "Roll No",
      id: "rollNo",
      name: "rollNo",
      type: "number",
      validation: "Roll no is required",
    },
    {
      label: "Joined Date",
      id: "joinedDate",
      name: "joinedDate",
      type: "date",
      validation: "Joined Date is required",
    },
    {
      label: "Department Name",
      id: "departmentName",
      name: "departmentName",
      type: "select",
      validation: "Department is required",
    },
    {
      label: "Year",
      id: "year",
      name: "year",
      type: "text",
      validation: "Year is required",
    },
    {
      label: "Semester",
      id: "semester",
      name: "semester",
      type: "text",
      validation: "Semester is required",
    },
  ],
};

export const addBookFormData = {
  title: "Add Book",
  data: [
    {
      label: "Title",
      id: "title",
      name: "title",
      type: "text",
      validation: "Title is required",
    },
    {
      label: "Quantity",
      id: "quantity",
      name: "quantity",
      type: "number",
      validation: "Quantity is required",
    },
    {
      label: "ISBN",
      id: "isbn",
      name: "isbn",
      type: "text",
      validation: "Isbn is required",
    },
   {
      label: "Author Name",
      id: "authorName",
      name: "authorName",
      type: "text",
      validation: "AuthorName is required",
    },
    {
      label: "Book Image",
      id: "bookImage",
      name: "bookImage",
      type: "file",
      validation: "BookImage is required",
    },
    {
      label: "PublishedDate",
      id: "publishedDate",
      name: "publishedDate",
      type: "date",
      validation: "Published Date is required",
    }
  ],
};

export const addDepartmentFormData={
  title:"Add Department",
  data:[
    {
      label:"Department Name",
      name:"name",
      id:"name",
      type:"text",
      validation:"Department Name is required"
    },
    {
      label:"Department Head",
      name:"departmentHead",
      id:"departmentHead",
      type:"text",
      validation:"Department Head is required"
    }
  ]
}

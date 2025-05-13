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
    }  ],
};


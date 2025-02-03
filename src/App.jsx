import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { Dashboard } from "./components/Dashboard/Dashboard";
import "./index.css";
import { RootLayout } from "./components/Root/RootLayout";
import { Books } from "./components/Books/Books";
import { Home } from "./components/Home/Home";
import { Students } from "./components/Students/Students";
import { Teachers } from "./components/Teachers/Teachers";

import { LoginPage } from "./components/Login/LoginPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Unauthorized from "./uiutils/Unauthorized";

import { checkAuth } from "./utils/Token";
import { AddBook } from "./components/Books/AddBook";
import { AddStudent } from "./components/Students/AddStudent";
import { AddTeacher } from "./components/Teachers/AddTeacher";
import ProtectedRoute from "./utils/ProtectedRoute";
import { AuthProvider } from "./context/AuthProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 5 * (60 * 1000), //5 minutes
    },
    devtools: {
      log: "all", // This option enables verbose logging in the console
    },
  },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader:checkAuth,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/students",
        // element: <Students />,
        element:( <ProtectedRoute element={<Students />} allowedRoles={["ROLE_LIBRARIAN"]} />),
      },
      {
        path: "/teachers",
        // element: <Teachers />,
        element:( <ProtectedRoute element={<Teachers />} allowedRoles={["ROLE_LIBRARIAN"]} />),
      },
      {
        path:"/addbook",
        // element:<AddBook/>
        element:( <ProtectedRoute element={<AddBook />} allowedRoles={["ROLE_LIBRARIAN"]} />),
      },
      {
        path:"/addstudent",
        // element:<AddStudent/>
        element:( <ProtectedRoute element={<AddStudent />} allowedRoles={["ROLE_LIBRARIAN"]} />),
      }
      ,
      {
        path:"/addteacher",
        // element:<AddTeacher/>
        element:( <ProtectedRoute element={<AddTeacher />} allowedRoles={["ROLE_LIBRARIAN"]} />),
      }
     
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path:"unauthorized",
    element:<Unauthorized/>
  }
  // ,{
  //   path:"logout",
  //   element:<Logout/>
  // }
]);

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      {/* <AuthProvider> */}
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        toastOptions={{
          error: {
            duration: 5000,
          },
          success: {
            duration: 3000,
          },
        }}
      />
      {/* </AuthProvider> */}
    </QueryClientProvider>
  );
}

export default App;

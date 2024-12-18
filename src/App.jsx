import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { Dashboard } from "./components/Dashboard/Dashboard";
import "./index.css";
import { RootLayout } from "./components/Root/RootLayout";
import { Books } from "./components/Books/Books";
import { Home } from "./components/Home/Home";
import { Students } from "./components/Students/Students";
import { Teachers } from "./components/Teachers/Teachers";
import { LoginForm } from "./components/Login/LoginForm";
import { LoginPage } from "./components/Login/LoginPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Unauthorized from "./components/Unauthorized/Unauthorized";

import { checkAuth } from "./utils/Token";
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
        element: <Students />,
      },
      {
        path: "/teachers",
        element: <Teachers />,
      },
     
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
    </QueryClientProvider>
  );
}

export default App;

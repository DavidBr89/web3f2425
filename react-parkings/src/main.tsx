import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.tsx";
import ParkingsPage from "./pages/ParkingsPage.tsx";
import AccountPage from "./pages/AccountPage.tsx";
import ParkingsMapPage from "./pages/ParkingsMapPage.tsx";
import ParkingsContextProvider from "./contexts/ParkingsContext.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";

const browserRouter = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <ParkingsPage />,
      },
      {
        path: "/map",
        element: <ParkingsMapPage />,
      },
      {
        path: "/account",
        element: <AccountPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ParkingsContextProvider>
      <RouterProvider router={browserRouter} />
    </ParkingsContextProvider>
  </StrictMode>
);

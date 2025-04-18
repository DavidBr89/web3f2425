import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import HomePage from "./pages/HomePage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import RootLayout from "./layouts/RootLayout.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import ParkingsPage from "./pages/ParkingsPage.tsx";
import FavoritesContextProvider from "./contexts/FavoritesContext.tsx";
import FavoritesPage from "./pages/FavoritesPage.tsx";
import DetailsPage from "./pages/DetailsPage.tsx";

const browserRouter = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
      {
        path: "/details/:id",
        element: <DetailsPage />,
      },
      {
        path: "/parkings",
        element: <ParkingsPage />,
      },
      // 1
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FavoritesContextProvider>
      <RouterProvider router={browserRouter} />
    </FavoritesContextProvider>
  </StrictMode>
);

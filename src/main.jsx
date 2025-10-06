import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppProvider } from "./contexts/AppContext";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Single from "./Pages/Single";
import Searchpage from "./Pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppProvider>
        <App></App>
      </AppProvider>
    ),
  },
  {
    path: "/Single",
    element: (
      <AppProvider>
        <Single></Single>
      </AppProvider>
    ),
  },
  {
    path: "/Search",
    element: (
      <AppProvider>
        <Searchpage></Searchpage>
      </AppProvider>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

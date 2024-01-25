import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Dentist from "./pages/Dentist.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/home",
    element:<Dentist/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <NextUIProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </NextUIProvider>
);

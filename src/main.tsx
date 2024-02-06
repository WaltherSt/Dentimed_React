import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";

import CalendarV2 from "./componentes/calendarv2/CalendarV2.tsx";
import Dashboard from "./componentes/dashboard/Dashboard.tsx";
import ItemMeet from "./componentes/meets/ItemMeet.tsx";
import "./index.css";
import Pacientes from "./pages/Pacientes.tsx";
import { Providers } from "./redux/Provider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/dentista",
    element: <Dashboard />,
    children: [
      {
        path: "calendario",
        element: <CalendarV2 />,
      },
      {
        path: "pacientes",
        element: (
          <Providers>
            <Pacientes />
          </Providers>
        ),
      },
      {
        path: "agenda",
        element: <ItemMeet />,
      },
    ],
  },
  { path: "*", element: <Dashboard /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <NextUIProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </NextUIProvider>
);

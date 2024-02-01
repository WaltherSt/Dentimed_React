import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import CalendarV2 from "./componentes/calendarv2/CalendarV2.tsx";
import ItemMeet from "./componentes/meets/ItemMeet.tsx";
import Table from "./componentes/tables/Table.tsx";
import "./index.css";
import Dentist from "./pages/Dentist.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Dentist />}>
      <Route path="calendario" element={<CalendarV2 />} />
      <Route path="pacientes" element={<Table />} />
      <Route path="agenda" element={<ItemMeet />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <NextUIProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </NextUIProvider>
);

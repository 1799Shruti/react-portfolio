import { createBrowserRouter } from "react-router";
import App from "./App";
import { HomePage, StudentsPage, ClockPage, AllWidgets } from "@/features";
import { ROUTES } from "@/shared/constants";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "students", element: <StudentsPage /> },
      { path: "clock", element: <ClockPage /> },
      { path: "materials", element: <AllWidgets /> },
    ],
  },
]);

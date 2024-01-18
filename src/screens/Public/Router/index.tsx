import { RootError } from "@/navigation/Error";
import { BaseLayout } from "@/navigation/Layout";
import { RouteObject } from "react-router-dom";

export const publicRoutes: RouteObject[] = [
  {
    path: "",
    element: <BaseLayout />,
    errorElement: <RootError />,
    children: [
      { path: "login", lazy: () => import("../Login") },
      { path: "register", lazy: () => import("../Register") },
    ],
  },
];

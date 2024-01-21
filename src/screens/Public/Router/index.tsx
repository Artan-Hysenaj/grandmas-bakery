import { RootError } from "@/navigation/Error";
import GuardedRoute from "@/navigation/GuardedRoute";
import { BaseLayout } from "@/navigation/Layout";
import { RouteObject } from "react-router-dom";

export const publicRoutes: RouteObject[] = [
  {
    path: "",
    element: (
      <GuardedRoute isPublic redirectTo="/dashboard">
        <BaseLayout />
      </GuardedRoute>
    ),
    errorElement: <RootError />,
    children: [
      { path: "login", lazy: () => import("../Login") },
      { path: "register", lazy: () => import("../Register") },
    ],
  },
];

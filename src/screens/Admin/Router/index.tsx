import { RootError } from "@/navigation/Error";
import GuardedRoute from "@/navigation/GuardedRoute";
import { MainLayout } from "@/navigation/Layout";
import { Link, Navigate, RouteObject } from "react-router-dom";

export const adminRoutes: RouteObject[] = [
  {
    path: "",
    element: (
      <GuardedRoute>
        <MainLayout />
      </GuardedRoute>
    ),
    errorElement: <RootError />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      {
        path: "dashboard",
        element: (
          <div>
            Dashboard
            <Link to={"/tasks"}>Tasks</Link>
          </div>
        ),
      },
      { path: "tasks", element: <div>Tasks</div> },
      //   { path: "messages", lazy: () => import("./messages") },
    ],
  },
];

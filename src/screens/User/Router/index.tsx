import { RootError } from "@/navigation/Error";
import GuardedRoute from "@/navigation/GuardedRoute";
import { MainLayout } from "@/navigation/Layout";
import { RouteObject } from "react-router-dom";

export const userRoutes: RouteObject[] = [
  {
    path: "",
    element: (
      <GuardedRoute>
        <MainLayout />
      </GuardedRoute>
    ),
    errorElement: <RootError />,
    children: [
      {
        path: "cakes",
        lazy: () => import("../Cake/CakesList"),
      },
      {
        path: "cakes/:id",
        lazy: () => import("../Cake/CakeDetails"),
      },
    ],
  },
];

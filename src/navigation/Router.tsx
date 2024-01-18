/* eslint-disable react-refresh/only-export-components */
/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { createElement } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { MainLayout } from "./Layout";
import { RootError } from "./Error";
import { publicRoutes } from "@/screens/Public/Router";


// check whether a route is public or not
export function isPublic(path: string): boolean {
  return publicRoutes.some((x) => x.path === path);
}

export const router = createBrowserRouter([
  ...publicRoutes,
  {
    path: "",
    element: <MainLayout />,
    errorElement: <RootError />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      //   { path: "dashboard", lazy: () => import("./dashboard") },
      //   { path: "tasks", lazy: () => import("./tasks") },
      //   { path: "messages", lazy: () => import("./messages") },
    ],
  },
]);

function Router(): JSX.Element {
  return createElement(RouterProvider, { router });
}

export default Router;

// Clean up on module reload (HMR)
// https://vitejs.dev/guide/api-hmr
if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

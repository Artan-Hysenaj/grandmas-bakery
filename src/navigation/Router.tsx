/* eslint-disable react-refresh/only-export-components */
/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { createElement } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { publicRoutes } from "@/screens/Public/Router";
import { userRoutes } from "@/screens/User/Router";
import { adminRoutes } from "@/screens/Admin/Router";

// check whether a route is public or not
export function isPublic(path: string): boolean {
  return publicRoutes.some((x) => x.path === path);
}

export const router = createBrowserRouter([
  ...publicRoutes,
  ...userRoutes,
  ...adminRoutes,
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

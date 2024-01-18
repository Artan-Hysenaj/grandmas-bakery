/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { Fragment, Suspense } from "react";
import { Outlet } from "react-router-dom";

/**
 * The main application layout.
 */
export function MainLayout(): JSX.Element {
  return (
    <Fragment>
      <Suspense>
        <Outlet />
      </Suspense>
    </Fragment>
  );
}

/**
 * The minimal app layout to be used on pages such Login/Signup,
 * Privacy Policy, Terms of Use, etc.
 */
export function BaseLayout(): JSX.Element {
  return (
    <div className="bg-pink-300">
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
}

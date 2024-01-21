/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

/**
 * The main application layout.
 */
export function MainLayout(): JSX.Element {
  return (
    <div className="container border py-4">
      <nav className="flex justify-between items-center mb-10">
        <div>
          <Link to={"/"}>
            <h1 className="text-neutral-700 text-5xl font-normal font-['Sansita One']">
              Home Bakery
            </h1>
          </Link>
        </div>
        <ul className="flex justify-between items-center gap-4">
          <li>
            <a href="/cart">Cart</a>
          </li>
          <li>
            <a href="/account">Account</a>
          </li>
        </ul>
      </nav>
      <main className="min-h-[calc(100vh-187px)]">
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <div className="flex justify-between items-center border-t pt-4">
          <div>
            <p>Home Bakery</p>
            <p>123-456-7890</p>
          </div>
          <div>
            <p>1234 Main St</p>
            <p>City, State 12345</p>
          </div>
          <div>
            <p>Hours:</p>
            <p>Mon-Fri: 9am-5pm</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/**
 * The minimal app layout to be used on pages such Login/Signup,
 * Privacy Policy, Terms of Use, etc.
 */
export function BaseLayout(): JSX.Element {
  return (
    <div className="container border">
      <nav>
        <ul>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
        </ul>
      </nav>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
}

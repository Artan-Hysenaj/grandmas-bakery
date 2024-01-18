/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { useRouteError } from "react-router-dom";

export function RootError(): JSX.Element {
  const err = useRouteError() as RouteError;

  return (
    <div>
      <h1>
        <strong>Error {err.status || 500}</strong>:{" "}
        {err.statusText ?? err.message}
      </h1>
    </div>
  );
}

type RouteError = Error & { status?: number; statusText?: string };

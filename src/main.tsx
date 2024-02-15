import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./navigation/Router";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "./index.css";

dayjs.extend(relativeTime);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

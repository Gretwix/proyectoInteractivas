import * as React from "react";
import { Outlet, createRootRoute, useLocation } from "@tanstack/react-router";

import Navigation from "../components/ui/Navigation";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const location = useLocation();
  const pathname = location.pathname;
  const hideLayout =
    pathname === "/login" || pathname === "/register" || pathname === "/profile" || pathname === "/";
  return (
    <React.Fragment>
      {!hideLayout && <Navigation />}
      <Outlet />
    </React.Fragment>
  );
}

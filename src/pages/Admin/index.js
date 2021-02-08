import React from "react";
import { Route, Switch } from "react-router-dom";
import adminRoutes from "pages/Admin/routes";
export default function index() {
  return (
    <div>
      <Switch>
        {adminRoutes.map((route, key) => (
          <Route path={route.path} component={route.page} />
        ))}
      </Switch>
    </div>
  );
}

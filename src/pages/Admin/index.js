import React, { createContext, useState } from "react";
import { Route, Switch } from "react-router-dom";
import adminRoutes from "pages/Admin/routes";
export const adminContext = createContext();
export default function Index() {
  const [admin, setAdmin] = useState("");
  return (
    <div>
      <Switch>
        <adminContext.Provider
          value={{
            admin,
            setAdmin,
          }}
          setAdmin={setAdmin}
        >
          {adminRoutes.map((route, key) => (
            <Route path={route.path} component={route.page} />
          ))}
        </adminContext.Provider>
      </Switch>
    </div>
  );
}

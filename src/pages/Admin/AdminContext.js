import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
// import adminRoutes from "pages/Admin/routes";

export const adminContext = createContext();
export default function Index() {
  const [admin, setAdmin] = useState("");
  const [groups, setGroups] = useState("Adil");
  return (
    <div>
      <adminContext.Provider
        value={{
          admin,
          setAdmin,
          groups,
          setGroups,
        }}
      >
        <Outlet />
      </adminContext.Provider>
    </div>
  );
}

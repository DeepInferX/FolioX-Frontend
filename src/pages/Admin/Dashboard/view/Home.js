import { adminContext } from "pages/Admin/AdminContext";
import React, { useContext } from "react";

export default function Home() {
  const { groups } = useContext(adminContext);
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

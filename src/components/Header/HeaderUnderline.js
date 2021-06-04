import React from "react";
import { Typography } from "@material-ui/core";

export default function HeaderUnderline({ text }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid rgba(0,0,0,0.23)",
        padding: "5px 5px 5px 0",
      }}
    >
      <Typography
        style={{
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "13px",
          lineHeight: "15px",
          color: "rgba(0, 0, 0, 0.7)",
        }}
      >
        {text}
      </Typography>
    </div>
  );
}

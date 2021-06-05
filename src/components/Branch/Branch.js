import React from "react";
export default function Branch({ branch }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        // width: "50%",
      }}
    >
      <p
        style={{
          fontFamily: "Quicksand",
          fontstyle: "normal",
          fontWeight: "500",
          fontSize: "13px",
          lineSeight: "15px",
        }}
      >
        {branch.branch_name}&nbsp;,
      </p>
      <p
        style={{
          fontFamily: "Quicksand",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "12px",
          lineHeight: "15px",
        }}
      >
        {branch.branch_hod}
      </p>
    </div>
  );
}

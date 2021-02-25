import React from "react";
import { Backdrop } from "@material-ui/core";
import Loader from "react-loader-spinner";

export default function LoadingSpinner({ open }) {

  return (
    <Backdrop style={{ zIndex: 1 }} open={open ? open: false}>
      <Loader type="TailSpin" color="#FFD782" height="100" width="100" />
    </Backdrop>
  );
}

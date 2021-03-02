<<<<<<< HEAD
import React from "react";
import { Backdrop } from "@material-ui/core";
import Loader from "react-loader-spinner";

export default function LoadingSpinner({ open }) {
  return (
    <Backdrop style={{ zIndex: 1 }} open={open}>
      <Loader type="TailSpin" color="#FFD782" height="100" width="100" />
    </Backdrop>
  );
}
=======
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
>>>>>>> 77a5ae5fd88813ece8291b74064a68d97705abdf

import React from "react";
import { Backdrop } from "@material-ui/core";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";

export default function LoadingSpinner() {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
      <Backdrop style={{ zIndex: 1 }} open={promiseInProgress}>
        <Loader type="TailSpin" color="#FFD782" height="100" width="100" />
      </Backdrop>
    )
  );
}

import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { messageClear } from "store/message";

export default function ErrorNotification() {
  const dispatch = useDispatch();
  const errorMessage = useSelector((store) => store.message.error);

  //custom id to prevent duplicate
  const customId = "custom-id-yes";

  const errorNotification = () =>
    toast.error(errorMessage, {
      toastId: customId,
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      //on close of error notification clear message from redux
      onClose: () => dispatch(messageClear()),
    });

  if (errorMessage != null) {
    errorNotification();
  }
  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { notificationClear } from "store/notification";

export default function Notification() {
  const dispatch = useDispatch();
  const message = useSelector((store) => store.notification.message);
  const type = useSelector(store=>store.notification.type)

  //custom id to prevent duplicate
  const customId = "custom-id-yes";

  const errorNotification = () =>
    toast.error(message, {
      toastId: customId,
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      onClose: () => dispatch(notificationClear()),
    });

    const successNotification = () =>
    toast.success(message, {
      toastId: customId,
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      onClose: () => dispatch(notificationClear()),
    });

  if (message != null && type === 'error') {
    errorNotification();
  }
  if (message != null && type === 'success') {
    successNotification();
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

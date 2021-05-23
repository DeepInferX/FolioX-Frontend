import React, { useState } from "react";
import Modal from "components/Modal";
import { Grid, Typography } from "@material-ui/core";
import Button from "components/CustomButton/CustomButton";
import { useDispatch } from "react-redux";
import { hideModal } from "store/modal";
import { deleteCourse } from "store/course";
import { notificationError, notificationSuccess } from "store/notification";
export default function AddNewStudentModal({ modalProps }) {
  const dispatch = useDispatch();
  return (
    <Modal open>
      <Grid container direction="column">
        <Typography variant="h6" component="p">
          {`Are you sure you want delete ?`}
        </Typography>
        <Grid item container justify="center">
          <Button
            text="Delete"
            onClick={() => {
              dispatch(deleteCourse(modalProps));
              dispatch(hideModal());
            }}
            background="backgroundBrownLight"
          />
          <Button
            text="Cancel"
            onClick={() => dispatch(hideModal())}
            background="backgroundBlueLight"
          />
        </Grid>
      </Grid>
    </Modal>
  );
}

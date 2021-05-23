import React, { useState } from "react";
import Modal from "components/Modal";
import { Grid, Typography } from "@material-ui/core";
import Input from "components/CustomInput/CustomInput";
import Button from "components/CustomButton/CustomButton";
import { useDispatch } from "react-redux";
import { hideModal } from "store/modal";
import { addStudent } from "store/group";
import { notificationError, notificationSuccess } from "store/notification";
export default function AddNewStudentModal({ modalProps }) {
  const dispatch = useDispatch();
  const [student, setStudent] = useState({
    name: null,
    email: null,
    roll_no: null,
    mobile: null,
  });
  return (
    <Modal open>
      <Grid style={{ maxWidth: 300 }}>
        <Typography variant="h6" align="center" gutterBottom>
          Add New Student
        </Typography>
        <Input
          label="Name"
          value={student.name}
          onChange={(e) => setStudent({ ...student, name: e.target.value })}
          background="brown"
        />
        <Input
          label="Roll No"
          value={student.roll_no}
          onChange={(e) => setStudent({ ...student, roll_no: e.target.value })}
          background="brown"
        />
        <Input
          label="Email"
          value={student.email}
          onChange={(e) => setStudent({ ...student, email: e.target.value })}
          background="brown"
        />
        <Input
          label="Mobile"
          value={student.mobile}
          background="brown"
          onChange={(e) => setStudent({ ...student, mobile: e.target.value })}
        />
        <Grid item container justify="center">
          <Button
            text="Add"
            onClick={() =>
              dispatch(addStudent({ ...modalProps, ...student }))
                .then((res) => {
                  dispatch(notificationSuccess(res.message));
                  dispatch(hideModal());
                })
                .catch((error) => {
                  dispatch(notificationError(error.message));
                })
            }
            background="yellow"
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

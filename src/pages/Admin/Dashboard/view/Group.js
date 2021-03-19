import {
  Grid,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Button from "components/CustomButton/CustomButton";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AddIcon from "@material-ui/icons/Add";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { deleteGroup, deleteStudent, updateStudent } from "store/group/index";
import Modal from "components/Modal";
import Input from "components/CustomInput/CustomInput";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "rgba(57, 74, 171, 0.7)",
      "& *": {
        color: "#fff",
      },
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  tableContainer: {
    border: "1px solid #000",
    marginTop: "20px",
    maxHeight: "65vh",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  group: {
    marginTop: 50,
  },
});

const GroupHeader = () => {
  const { id } = useParams();
  const admin_id = useSelector((store) => store.auth.user.access_key.admin_id);
  const dispatch = useDispatch();
  const groupCreatedAt = useSelector((store) => store.group.groups).filter(
    (group) => group.id === id
  )[0].time;
  return (
    <Grid container justify="space-between" alignItems="center">
      <Typography>Group Details</Typography>
      <Grid xs item container alignItems="center" justify="flex-end">
        <ChatBubbleOutlineIcon
          style={{ color: "rgba(57, 74, 171, 1)", marginRight: 10 }}
        />
        <AddIcon style={{ color: "rgba(57, 74, 171, 1)", marginRight: 10 }} />
        <DeleteOutlineIcon
          onClick={() => dispatch(deleteGroup(id, "1"))}
          style={{ color: "rgba(57, 74, 171, 1)", marginRight: 10 }}
        />
        <Typography variant="caption">Created On: {groupCreatedAt}</Typography>
      </Grid>
    </Grid>
  );
};

const OtherGroups = () => {
  const { id } = useParams();
  const studentGroups = useSelector((store) => store.group.groups);
  const classes = useStyles();
  return (
    <Grid className={classes.group}>
      <Typography>Your other groups</Typography>
      {studentGroups.map((group) => {
        if (group.id === id) return;
        return (
          <Button
            key={group.id}
            text={group.group_name}
            background="backgroundBlueLight"
            color="white"
            to={`../id=${group.id}`}
          />
        );
      })}
    </Grid>
  );
};

const StudentTable = ({ openDeleteModal, openUpdateModal }) => {
  const classes = useStyles();
  const { id } = useParams();

  const { students, group_name } = useSelector(
    (store) => store.group.groups
  ).filter((group) => group.id === id)[0];

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{group_name}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student, idx) => (
            <StyledTableRow key={student.id}>
              <StyledTableCell component="th" scope="row">
                {idx + 1}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {student.name}
              </StyledTableCell>
              <StyledTableCell align="right">{student.roll_no}</StyledTableCell>
              <StyledTableCell align="right">{student.email}</StyledTableCell>
              <StyledTableCell align="right">{student.mobile}</StyledTableCell>
              <StyledTableCell
                align="right"
                onClick={() => openUpdateModal(student)}
              >
                Edit
              </StyledTableCell>
              <StyledTableCell
                align="right"
                onClick={() => openDeleteModal(student)}
              >
                Delete
              </StyledTableCell>
              <StyledTableCell align="right">Message</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const DeleteStudentModal = (props) => {
  const { student, handleClose, deleteStudentHandler, ...rest } = props;
  return (
    <Modal handleClose={handleClose} {...rest}>
      <Grid container direction="column">
        <Typography variant="h6" component="p">
          {`Are you sure you want delete ${student.name} ?`}
        </Typography>
        <Grid item container justify="center">
          <Button
            text="Delete"
            onClick={deleteStudentHandler}
            background="backgroundBrownLight"
          />
          <Button
            text="Cancel"
            onClick={handleClose}
            background="backgroundBlueLight"
          />
        </Grid>
      </Grid>
    </Modal>
  );
};

const UpdateStudentModal = (props) => {
  const {
    student,
    setStudent,
    handleClose,
    updateStudentHandler,
    ...rest
  } = props;
  return (
    <Modal handleClose={handleClose} {...rest}>
      <Grid style={{ maxWidth: 300 }}>
        <Typography variant="h6" align="center" gutterBottom>
          Update
        </Typography>
        <Input
          value={student.name}
          onChange={(e) => setStudent({ ...student, name: e.target.value })}
          background="brown"
        />
        <Input
          value={student.email}
          onChange={(e) => setStudent({ ...student, email: e.target.value })}
          background="brown"
        />
        <Input
          value={student.mobile}
          background="brown"
          onChange={(e) => setStudent({ ...student, mobile: e.target.value })}
        />
        <Input
          value={student.password}
          label="password"
          background="brown"
          onChange={(e) => setStudent({ ...student, password: e.target.value })}
        />
        <Grid item container justify="center">
          <Button
            text="Update"
            onClick={updateStudentHandler}
            background="yellow"
          />
          <Button
            text="Cancel"
            onClick={handleClose}
            background="backgroundBlueLight"
          />
        </Grid>
      </Grid>
    </Modal>
  );
};

const useMessageStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    padding: 15,
    backgroundColor: "e5e5e5",
  },
  receiver: {
    paddingLeft: 10,
    paddingRight: 10,
    boxShadow: theme.shadows[20],
    display: "flex",
    alignItems: "center",
    marginBottom: 15,
    "& h3": {
      color: "#a1a1a1",
    },
    "& p": {
      color: "#ECB365",
      fontWeight: "bold",
      paddingLeft: 30,
    },
  },
  message: {
    boxShadow: `${theme.shadows[20]}`,
    border: "none",
    outline: "none",
  },
  sendButton: {
    border: "none",
    width: "100%",
    padding: "10px",
    fontSize: "1em",
    fontWeight: "600",
    outline: "none",
    marginTop: "15px",
    backgroundImage: "linear-gradient(to right, #AD67D1, #4879D8, #79EECC)",
  },
}));

const Message = ({ to }) => {
  const classes = useMessageStyles();
  return (
    <div className={classes.root}>
      <h3>Create Message</h3>
      <div className={classes.receiver}>
        <h3>To</h3>
        <p>{to}</p>
      </div>
      <div>
        <Input
          className={classes.message}
          multiline
          background="brown"
          rows="10"
        />
        <button className={classes.sendButton}>Send Message</button>
      </div>
    </div>
  );
};

export default function Group(props) {
  const dispatch = useDispatch();
  const admin_id = useSelector((store) => store.auth.user.access_key.admin_id);
  const [deleteModal, setDeleteModal] = useState(false);
  const [student, setStudent] = useState("");
  const [updateModal, setUpdateModal] = useState(false);

  const handleClose = () => {
    setDeleteModal(false);
    setUpdateModal(false);
    setStudent("");
  };
  const openDeleteModal = (student) => {
    setStudent(student);
    setDeleteModal((open) => !open);
  };
  const deleteStudentHandler = () => {
    dispatch(deleteStudent(student, admin_id));
    handleClose();
  };

  const openUpdateModal = (student) => {
    setStudent(student);
    setUpdateModal(true);
  };
  const updateStudentHandler = () => {
    console.log("hi");
    dispatch(updateStudent(student, admin_id));
    handleClose();
  };

  return (
    <Grid>
      {/* <DeleteStudentModal
        open={deleteModal}
        handleClose={handleClose}
        student={student}
        deleteStudentHandler={deleteStudentHandler}
      />
      <UpdateStudentModal
        open={updateModal}
        student={student}
        setStudent={setStudent}
        handleClose={handleClose}
        updateStudentHandler={updateStudentHandler}
      />
      <GroupHeader />
      <StudentTable
        openDeleteModal={openDeleteModal}
        openUpdateModal={openUpdateModal}
      />
      <OtherGroups /> */}
      <Message to="Rishav God" />
    </Grid>
  );
}

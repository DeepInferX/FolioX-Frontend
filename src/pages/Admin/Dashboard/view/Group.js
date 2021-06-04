import {
  Breadcrumbs,
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
import { useParams, useNavigate, Link } from "react-router-dom";
import Button from "components/CustomButton/CustomButton";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AddIcon from "@material-ui/icons/Add";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { deleteGroup, deleteStudent, updateStudent } from "store/group/index";
import { sendMessageToStudent, sendMessageToGroup } from "store/message";
import Modal from "components/Modal";
import Input from "components/CustomInput/CustomInput";
import { showModal } from "store/modal";
import Footer from "components/Footer/Footer";
import BreadCrump from "components/BreadCrumb/BreadCrumb";

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

const useMessageStyles = makeStyles((theme) => ({
  root: {
    // width: 350,
    width: "100%",
    padding: 15,
    paddingTop: 30,
    paddingBottom: 40,
    backgroundColor: "e5e5e5",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[20],
    backgroundColor: "#e6e8e6",
  },
  receiver: {
    paddingLeft: 10,
    paddingRight: 10,
    display: "flex",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#fff",
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
    padding: 10,
  },
}));

const GroupHeader = (props) => {
  const {
    group_id,
    admin_id,
    college_id,
    groupCreatedAt,
    openMessageModal,
    openDeleteModal,
    group_name,
    dispatch,
  } = props;
  return (
    <Grid container justify="space-between" alignItems="center">
      <Grid item xs="12">
        <BreadCrump
          link1="Student Groups"
          link2={group_name}
          title="Group Details"
        />
      </Grid>

      <Grid xs item container alignItems="center" justify="flex-end">
        <ChatBubbleOutlineIcon
          onClick={() => openMessageModal()}
          style={{ color: "rgba(57, 74, 171, 1)", marginRight: 10 }}
        />
        <AddIcon
          onClick={() =>
            dispatch(
              showModal({
                modalType: "ADD_STUDENT",
                modalProps: {
                  admin_id,
                  college_id,
                  group_id,
                },
              })
            )
          }
          style={{ color: "rgba(57, 74, 171, 1)", marginRight: 10 }}
        />
        <DeleteOutlineIcon
          onClick={openDeleteModal}
          style={{ color: "rgba(57, 74, 171, 1)", marginRight: 10 }}
        />
        <Typography variant="caption">Created On: {groupCreatedAt}</Typography>
      </Grid>
    </Grid>
  );
};

const StudentTable = ({
  openDeleteModal,
  openUpdateModal,
  openMessageModal,
  students,
  group_name,
}) => {
  const classes = useStyles();
  students.sort((a, b) => a.name.lenght > b.name.length);
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
              <StyledTableCell
                align="right"
                onClick={() => openMessageModal(student)}
              >
                Message
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const OtherGroups = ({ grop_id, groups }) => {
  const classes = useStyles();
  if (groups.length === 1) return null;
  return (
    <Grid className={classes.group}>
      <Typography>Your other groups</Typography>
      {groups.map((group) => {
        if (group.id === grop_id) return;
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

const DeleteModal = (props) => {
  const {
    student,
    CloseModal,
    deleteStudentHandler,
    deleteGroupHandler,
    group,
    ...rest
  } = props;
  return (
    <Modal CloseModal={CloseModal} {...rest}>
      <Grid container direction="column">
        <Typography variant="h6" component="p">
          {`Are you sure you want delete ${student.name || group.group_name} ?`}
        </Typography>
        <Grid item container justify="center">
          <Button
            text="Delete"
            onClick={() =>
              student?.name ? deleteStudentHandler() : deleteGroupHandler()
            }
            background="backgroundBrownLight"
          />
          <Button
            text="Cancel"
            onClick={CloseModal}
            background="backgroundBlueLight"
          />
        </Grid>
      </Grid>
    </Modal>
  );
};

const UpdateStudentModal = (props) => {
  const { student, setStudent, CloseModal, updateStudentHandler, ...rest } =
    props;
  return (
    <Modal CloseModal={CloseModal} {...rest}>
      <Grid style={{ maxWidth: 300 }}>
        <Typography variant="h6" align="center" gutterBottom>
          Update
        </Typography>
        <Input
          label="Name"
          value={student.name}
          onChange={(e) => setStudent({ ...student, name: e.target.value })}
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
            onClick={CloseModal}
            background="backgroundBlueLight"
          />
        </Grid>
      </Grid>
    </Modal>
  );
};

const MessageModal = ({
  open,
  student,
  CloseModal,
  sendMessage,
  group_name,
}) => {
  const classes = useMessageStyles();
  const [message, setMessage] = useState("");
  return (
    <Modal open={open} CloseModal={CloseModal}>
      <Grid style={{ minWidth: 300 }}>
        <Typography variant="h6" align="center" gutterBottom>
          Create Message
        </Typography>
        <div className={classes.receiver}>
          <h3>To</h3>
          <p>{student.name || group_name}</p>
        </div>
        <div>
          <Input
            label="Enter your message..."
            className={classes.message}
            multiline
            background="brown"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Grid item container justify="center">
            <Button
              text="Send"
              onClick={() => {
                sendMessage(message);
                CloseModal();
              }}
              background="yellow"
            />
            <Button
              text="Cancel"
              onClick={CloseModal}
              background="backgroundBlueLight"
            />
          </Grid>
        </div>
      </Grid>
    </Modal>
  );
};

export default function Group(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id: group_id } = useParams();
  const currentGroup = useSelector(
    (store) => store.group.groups.filter((group) => group.id === group_id)[0]
  );
  const groupCreatedAt = currentGroup?.time;
  const { students, group_name } = currentGroup || {};
  students?.sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10));
  const groups = useSelector((store) => store.group.groups);
  const admin_id = useSelector((store) => store.auth.user.access_key.admin_id);
  const college_id = useSelector((store) => store.auth.user.college.id);
  const [deleteModal, setDeleteModal] = useState(false);
  const [student, setStudent] = useState("");
  const [updateModal, setUpdateModal] = useState(false);
  const [messageModal, setMessageModal] = useState(false);

  const CloseModal = () => {
    setDeleteModal(false);
    setUpdateModal(false);
    setMessageModal(false);
    setStudent("");
  };
  const openDeleteModal = (student) => {
    if (student) setStudent(student);
    setDeleteModal((open) => !open);
  };
  const deleteStudentHandler = () => {
    dispatch(deleteStudent(student, admin_id));
    CloseModal();
  };

  const deleteGroupHandler = () => {
    dispatch(deleteGroup(group_id, admin_id));
    CloseModal();
  };

  const openUpdateModal = (student) => {
    setStudent(student);
    setUpdateModal(true);
  };

  const updateStudentHandler = () => {
    dispatch(updateStudent(student, admin_id));
    CloseModal();
  };

  const openMessageModal = (student) => {
    if (student) setStudent(student);
    setMessageModal(true);
  };

  const sendMessage = (message) => {
    if (student) {
      dispatch(
        sendMessageToStudent({ message, admin_id, stduent_id: student.id })
      );
    } else {
      dispatch(sendMessageToGroup({ message, admin_id, group_id }));
    }
  };

  if (!currentGroup) {
    navigate("/admin/dashboard/home", { replace: true });
    return <></>;
  }

  return (
    <Grid
      style={{
        height: "calc(100vh - 30px)",
      }}
    >
      <GroupHeader
        openMessageModal={openMessageModal}
        groupCreatedAt={groupCreatedAt}
        openDeleteModal={openDeleteModal}
        group_id={group_id}
        admin_id={admin_id}
        college_id={college_id}
        dispatch={dispatch}
        group_name={group_name}
      />
      <StudentTable
        openDeleteModal={openDeleteModal}
        openUpdateModal={openUpdateModal}
        openMessageModal={openMessageModal}
        students={students}
        group_name={group_name}
      />
      <OtherGroups grop_id={group_id} groups={groups} />

      <UpdateStudentModal
        open={updateModal}
        student={student}
        setStudent={setStudent}
        CloseModal={CloseModal}
        updateStudentHandler={updateStudentHandler}
      />
      <DeleteModal
        open={deleteModal}
        CloseModal={CloseModal}
        student={student}
        deleteStudentHandler={deleteStudentHandler}
        deleteGroupHandler={deleteGroupHandler}
        group={currentGroup}
      />

      <MessageModal
        open={messageModal}
        student={student}
        CloseModal={CloseModal}
        sendMessage={sendMessage}
        group_name={group_name}
      />
    </Grid>
  );
}

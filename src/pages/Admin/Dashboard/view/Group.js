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
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Button from "components/CustomButton/CustomButton";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AddIcon from "@material-ui/icons/Add";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { deleteGroup } from "store/group/index";

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

const StudentTable = () => {
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
              <StyledTableCell align="right">Edit</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
              <StyledTableCell align="right">Message</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default function Group() {
  // const { id } = useParams();
  // const navigate = useNavigate();
  // // //if group with the id in link is not availbale then send user back to dashboard
  // const group = useSelector((store) => store.group.groups).filter(
  //   (group) => group.id === id
  // );
  // if (!group)
  // navigate('../')
  return (
    <Grid>
      <GroupHeader />
      <StudentTable />
      <OtherGroups />
    </Grid>
  );
}

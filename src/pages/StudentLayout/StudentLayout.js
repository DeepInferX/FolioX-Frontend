import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, NavLink } from "react-router-dom";
import {
  Grid,
  Avatar,
  Typography,
  List,
  ListItem,
  Box,
  Button,
} from "@material-ui/core";
import NotificationBadge from "components/NotificationBadge/NotificationBadge";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SendIcon from "@material-ui/icons/Send";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import SchoolIcon from "@material-ui/icons/School";
import NavItem from "pages/Admin/Dashboard/NavBar/NavItem";
import { loadJobPostings } from "store/student/index";

const Test = ({ jobs }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  console.log(jobs);

  return (
    <List>
      <NavItem href="dashboard" title="Dashboard" icon={DashboardIcon} />
      <NavItem href="resume" title="Resume" icon={PersonIcon} />

      <ListItem button onClick={handleClick}>
        <ListItemIcon
          style={{
            display: "flex",
            minWidth: "unset",
            marginRight: 8,
          }}
        >
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText secondary="Job Postings" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse
        style={{ paddingLeft: 30 }}
        in={open}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          {jobs?.map((job) => (
            <NavItem
              href={`jobs/id=${job.id}`}
              title={`${job.company_name} - ${job.position}`}
            />
          ))}
        </List>
      </Collapse>
    </List>
  );
};

const StudentLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadJobPostings());
  }, []);
  const { name } = useSelector((store) => store.student);
  const jobs = useSelector((store) => Object.values(store.student.jobs));
  return (
    <Grid container>
      <Grid
        style={{ minHeight: "100vh" }}
        item
        container
        direction="column"
        xs={2}
      >
        <Grid
          container
          style={{
            height: 60,
            paddingLeft: 15,
            borderBottom: "2px solid black",
          }}
          alignItems="center"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ paddingRight: 10 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </div>
            <p>
              Hi, <b>{name}</b>{" "}
            </p>
          </div>
        </Grid>
        <Grid>
          <Test jobs={jobs} />
        </Grid>
      </Grid>
      <Grid item xs={10} style={{ background: "#F6F7FB" }}>
        <Grid
          container
          justify="flex-end"
          alignItems="center"
          style={{ height: 60, paddingRight: 25 }}
        >
          <NotificationBadge count={1} />
        </Grid>
        <Grid>
          <Box px={10}>
            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StudentLayout;

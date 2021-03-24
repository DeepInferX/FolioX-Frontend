import React, { useEffect, useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import NavBar from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import { loadGroups } from "store/group/index";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    // paddingTop: 64,
    paddingLeft: 300,
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
  },
  content: {
    flex: "1 1 auto",
    overflow: "auto",
    height: "100vh",
    overflow: "hidden",
    [theme.breakpoints.up("md")]: {
      padding: 50,
    },
    [theme.breakpoints.down("md")]: {
      padding: 20,
    },
  },
}));

const DashboardLayout = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const admin_id = useSelector((store) => store.auth.user.access_key.admin_id);

  //Load Groups
  useEffect(() => {
    dispatch(loadGroups(admin_id));
  }, []);

  return (
    <div className={classes.root}>
      <NavBar/>
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

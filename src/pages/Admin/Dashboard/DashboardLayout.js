import React, { useEffect, useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import NavBar from "./NavBar";
import TopBar from "components/TopBar/TopBar";
import { useDispatch, useSelector } from "react-redux";
import { loadGroups } from "store/group/index";
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";
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
    paddingTop: 64,
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 300,
    },
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
  },
  content: {
    flex: "1 1 auto",
    overflow: "auto",
    height: "93vh",
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
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const admin_id = useSelector((store) => store.auth.user.access_key.admin_id);
  const isLoading = useSelector((store) => store.group.isLoading);

  //Load Groups
  useEffect(() => {
    //For now static admin id
    //Later on change to dynamic id
    dispatch(loadGroups(1));
  }, []);

  return (
    <div className={classes.root}>
      <LoadingSpinner open={isLoading} />
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
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

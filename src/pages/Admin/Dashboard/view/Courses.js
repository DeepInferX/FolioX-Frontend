import React from "react";
import BreadCrumb from "components/BreadCumb/BreadCrumb";
import Footer from "components/Footer/Footer";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 30px)",
    position: "relative",
  },
}));
export default function Courses() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BreadCrumb
        link1="Courses"
        title="View your courses."
        subtitle="Students will be able to select any one from these courses."
      />
      <h1>Courses</h1>
      <div
        style={{
          position: "absolute",
          width: "100%",
          bottom: "0px",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}

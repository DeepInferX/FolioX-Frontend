import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 30,
    width: "100%",
    position: "absolute",
    background: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bottom: "0px",
    [theme.breakpoints.up("md")]: {
      marginLeft: "-30px",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "-20px",
    },
  },
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography align="center">
        Designed and developed by DeepInderX
      </Typography>
    </div>
  );
}

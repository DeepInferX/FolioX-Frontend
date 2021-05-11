import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
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

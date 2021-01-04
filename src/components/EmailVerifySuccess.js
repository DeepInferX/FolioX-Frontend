import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import emailVerification from "../assets/mail-verification.json";
import Lottie from "react-lottie";
import { NavLink } from "react-router-dom";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: emailVerification,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
}));

export default function EmailVerifySuccess() {
  const classes = useStyle();
  return (
    <div>
      <Grid
        className={classes.root}
        container
        style={{ border: "1px solid red" }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography color="textPrimary" variant="h3">
            Welcome
          </Typography>
          <Typography color="textSecondary">
            Your account has been verified.
            <CheckBoxIcon />
          </Typography>
          <NavLink to="/">
            <Button variant="contained" color="primary">
              Go to Home
            </Button>
          </NavLink>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Lottie options={defaultOptions} height={400} width={400} />
        </Grid>
      </Grid>
    </div>
  );
}

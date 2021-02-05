import { Grid, Typography } from "@material-ui/core";
import React from "react";
import Navbar from "components/Navbar/Navbar";
import fx from "assets/logo/fx.png";
import Card from "components/Card/Card";
import Login from "assets/img/login.png";
import Register from "assets/img/register.png";
import useStyles from "assets/style/pages/GetStarted/GetStarted";
export default function Landing() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        item
        style={{ backgroundColor: "white", height: "100vh" }}
      >
        <Grid item xs={12}>
          <Navbar logo={fx} />
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            className={classes.text}
            gutterBottom
            variant="h4"
            align="center"
            component="p"
          >
            Please select any one.
          </Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card Img={Register} text={"Register"} to="/admin-register" />
            <Card Img={Login} text={"Login"} to="/admin-login" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

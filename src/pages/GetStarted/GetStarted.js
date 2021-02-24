import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Navbar from "components/Navbar/Navbar";
import fx from "assets/logo/fx.png";
import Card from "components/Card/Card";
import Teacher from "assets/img/teacherAdmin.png";
import Student from "assets/img/student.png";

//style
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F0E9E1",
    padding: "0px 7vh",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 3vh",
    },
  },
  text: {
    fontFamily: "Quicksand, sans-serif !important",
    fontWeight: "500",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

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
            Continue as?
          </Typography>
          <Grid className={classes.cardContainer}>
            <Card Img={Teacher} text={"Teacher/Admin"} to="/admin/option/" />
            <Card Img={Student} text={"Student"} to="#" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

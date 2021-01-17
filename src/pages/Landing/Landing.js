import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyle from "assets/style/pages/Landing/Landing";
import Navbar from "components/Navbar/Navbar";
import fx from "assets/logo/fx.png";
import HeroImg from "assets/img/landing.png";
import CustomButton from "components/CustomButton/CustomButton";
import { NavLink } from "react-router-dom";

export default function Landing() {
  const classes = useStyle();
  const circle = <span>&#9675;&nbsp;</span>;
  const LandingLeft = () => {
    return (
      <div>
        <h1 className={classes.title}>
          Apply for jobs <br /> in a click.
        </h1>
        <CustomButton
          text={"Get Started"}
          to={"/get-started/"}
          background="yellow"
        />
        <CustomButton text={"Get App"} logo={circle} border="borderGray" />
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <Grid container item className={classes.landing}>
        <Grid item xs={12}>
          <Navbar logo={fx} appbar />
        </Grid>
        <Grid item container xs={12} style={{ height: "70vh" }}>
          <Grid item xs={6} className={classes.landingLeft}>
            <LandingLeft />
          </Grid>
          <Grid item xs={6} className={classes.img}>
            <img src={HeroImg} width="60%" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

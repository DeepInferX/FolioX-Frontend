import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Navbar from "components/Navbar/Navbar";
import fx from "assets/logo/fx.png";
import HeroImg from "assets/img/landing.png";
import CustomButton from "components/CustomButton/CustomButton";

//style
const useStyle = makeStyles((theme) => ({
  root: {
    paddingTop: "10vh",
    paddingLeft: "7vh",
    paddingRight: "7vh",
    backgroundColor: "#F0E9E1",
    minHeight: "100vh",
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      paddingTop: "5vh",
      paddingLeft: "3vh",
      paddingRight: "3vh",
    },
  },
  landing: {
    backgroundColor: "white",
    minHeight: "90vh",
    borderRadius: "15px 15px 0 0",
    [theme.breakpoints.down("sm")]: {
      minHeight: "95vh",
    },
  },

  landingLeft: {
    display: "flex",
    justifyContent: "Center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      order: 2,
    },
  },

  img: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      order: 1,
    },
  },

  title: {
    fontFamily: "Quicksand",
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '70px',
    lineHeight:' 117.6%',

    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      textAlign: 'center'
    },
  },
  test: {
    [theme.breakpoints.down('sm')]:{
      position: 'relative',
      right: '-11px'

    }
  }
}));

export default function Landing() {
  const classes = useStyle();
  const circle = <span>&#9675;&nbsp;</span>;

  const LandingLeft = () => {
    return (
      <div>
        <h1 className={classes.title}>
          Apply for jobs <br /> in a click.
        </h1>
        <div className={classes.test}>
          <CustomButton
            text={"Get Started"}
            to={"/get-started/"}
            background="yellow"
          />
          <CustomButton text={"Get App"} logo={circle} border="borderGray" />
        </div>

        
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <Grid container item className={classes.landing}>
        <Grid item xs={12}>
          <Navbar logo={fx} appbar />
        </Grid>
        <Grid item container xs={12} style={{ minHeight: "70vh" }}>
          <Grid item xs={12} md={6} className={classes.landingLeft}>
            <LandingLeft />
          </Grid>
          <Grid item xs={12} md={6} className={classes.img}>
            <img src={HeroImg} width="80%" alt="hero imge" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

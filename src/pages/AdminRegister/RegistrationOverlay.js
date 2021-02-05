import React from "react";
import useStyles from "assets/style/pages/AdminRegister/RegistrationOverlay";
import Navbar from "components/Navbar/Navbar";
import fx from "assets/logo/fx.png";
import Typography from "components/CustomTypography/Typography";
import { Grid } from "@material-ui/core";
export default function AdminRegistration() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <Navbar logo={fx} />
        <Grid container justify="center">
          <Grid item xs={8}>
            <Typography
              variant="subtitle1"
              component="p"
              style={{ lineHeight: "20px", fontSize: "1.2rem" }}
            >
              Registration successfull !<br />
              <br /> Please give us some time to verify your details. As soon as
              your details are verified, we will be sending you your access
              keys. It generally takes lezs than 24 hours.
              <br />
              <br />
              We have sent you an email to the email address provided by you,
              please verify your email address.
              <br />
              <br />
              In the meantime, checkout our parent instagram handle :
              <span style={{ color: "#DB9696" }}>https://www.google.com </span>
              <br /> <br />- Team FolioX
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

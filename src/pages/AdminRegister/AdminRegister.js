import { Grid } from "@material-ui/core";
import React from "react";
import Navbar from "components/Navbar/Navbar";
import fx from "assets/logo/fx.png";
import Typography from "components/CustomTypography/Typography";
import useStyles from "assets/style/pages/AdminRegister/AdminRegister";
import CustomInput from "components/CustomInput/CustomInput";
import CustomButton from "components/CustomButton/CustomButton";
const circle = <span>&#9675;&nbsp;</span>;
export default function Landing() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        style={{
          height: "100vh",
        }}
      >
        <Grid item className={classes.top}></Grid>
        <Grid className={classes.main} item container>
          <Grid item xs={12} style={{ height: "100px" }}>
            <Navbar logo={fx} />
          </Grid>
          <Grid item xs={12} className={classes.title}>
            <Typography
              variant="h4"
              align="center"
              component="p"
              fontWeight="800"
            >
              Registration From
            </Typography>
          </Grid>

          <Grid
            item
            direction="row"
            justify="space-around"
            style={{ flexGrow: "1" }}
            container
          >
            <Grid item className={classes.mainLeft} xs={4}>
              <Typography
                variant="subtitle1"
                align="center"
                component="p"
                fontWeight="800"
                gutterBottom
              >
                Personal Details
              </Typography>

              <CustomInput
                label="Name*"
                background="brown"
                fullWidth
              ></CustomInput>
              <CustomInput
                label="E-mail*"
                background="brown"
                fullWidth
              ></CustomInput>
              <CustomInput
                label="Mobile Number*"
                background="brown"
                fullWidth
              ></CustomInput>
              <CustomInput
                label="Password*"
                background="brown"
                fullWidth
              ></CustomInput>
              <CustomInput
                label="Confirm Password*"
                background="brown"
                fullWidth
              ></CustomInput>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="subtitle1"
                align="center"
                component="p"
                fontWeight="800"
                gutterBottom
              >
                College Details
              </Typography>
              <CustomInput
                background="brown"
                label="College Name *"
                fullWidth
              ></CustomInput>
              <CustomInput
                label="College LinkedIn Profile *"
                background="brown"
                fullWidth
              ></CustomInput>
              <CustomInput
                background="brown"
                label="College Address *"
                fullWidth
                multiline
                rows="5"
                cols="30"
              ></CustomInput>
              <CustomButton
                text={"Login"}
                logo={circle}
                to={"/get-started/"}
                background="white"
                border="borderGray"
              />
              <CustomButton text={"Register"} background="brown" />
            </Grid>
            <Grid item container justify="center" alignItems="center" xs={12}>
              <Typography variant="subtitle2" align="center">
                * The (*) marked fields are required. Read our policy to know
                how we use your data.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

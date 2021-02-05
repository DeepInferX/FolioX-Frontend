import { Grid } from "@material-ui/core";
import React from "react";
import Navbar from "components/Navbar/Navbar";
import fx from "assets/logo/fx.png";
import Typography from "components/CustomTypography/Typography";
import useStyles from "assets/style/pages/AdminLogin";
import CustomInput from "components/CustomInput/CustomInput";
import CustomButton from "components/CustomButton/CustomButton";
import image from "assets/img/admin-login-image.svg";
import Select from "components/Select/Select";
import { useState } from "react";
const circle = <span>&#9675;&nbsp;</span>;
export default function Landing() {
  const [selectedCollege, setSelectedCollege] = useState("");
  const classes = useStyles();
  console.log(selectedCollege);
  return (
    <div>
      <Grid
        className={classes.main}
        container
        direction="column"
        style={{ minHeight: "100vh" }}
      >
        <Grid item style={{ height: "100px" }}>
          <Navbar logo={fx} />
        </Grid>
        <Grid item>
          <Typography
            variant="h4"
            align="center"
            component="p"
            fontWeight="800"
          >
            Please enter your credentials
          </Typography>
        </Grid>
        <Grid
          item
          justify="space-around"
          alignItems="center"
          style={{ flexGrow: "1" }}
          container
          direction="row"
        >
          <Grid item xs={4}>
            <Select
              background="brown"
              selectedCollege={selectedCollege}
              setSelectedCollege={setSelectedCollege}
            >
              <option slected>Select college</option>
              <option
                onChange={(e) => setSelectedCollege(e.target.value)}
                value="nist"
              >
                National Institute of Science and Technology
              </option>
              <option
                onChange={(e) => setSelectedCollege(e.target.value)}
                value="roland"
              >
                Roland Institute of Technology
              </option>
              <option
                onChange={(e) => setSelectedCollege(e.target.value)}
                value="hit"
              >
                Holy Institute of Technology
              </option>
              <option
                onChange={(e) => setSelectedCollege(e.target.value)}
                value="usc"
              >
                University of Southern California
              </option>
            </Select>
            <CustomInput
              label="Email"
              background="brown"
              fullWidth
            ></CustomInput>
            <CustomInput
              label="Password"
              background="brown"
              fullWidth
            ></CustomInput>
            <CustomButton
              text={"Forgot?"}
              logo={circle}
              to={"/get-started/"}
              background="white"
              border="borderGray"
            />
            <CustomButton text={"Continue"} background="brown" />
          </Grid>
        </Grid>
        <Grid item justify="flex-start">
          <img src={image} width="300" alt="admin login" />
        </Grid>
      </Grid>
    </div>
  );
}

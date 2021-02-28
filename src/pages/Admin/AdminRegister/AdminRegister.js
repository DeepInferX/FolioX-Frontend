import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import Navbar from "components/Navbar/Navbar";
import fx from "assets/logo/fx.png";
import Typography from "components/CustomTypography/Typography";
import useStyles from "assets/style/pages/AdminRegister/AdminRegister";
import CustomInput from "components/CustomInput/CustomInput";
import CustomButton from "components/CustomButton/CustomButton";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const circle = <span>&#9675;&nbsp;</span>;

export default function Landing(props) {
  //States for all the input field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [collegeLinkedin, setCollegeLinkedin] = useState("");
  const [collegeAddress, setCollegeAddress] = useState("");

  /**
   * Function for handling change in input field
   * @param event
   *
   */

  const handelChange = ({ target: { name: type, value } }) => {
    switch (type) {
      case "Name":
        setName(value);
        break;

      case "Email":
        setEmail(value);
        break;

      case "MobileNumber":
        setMobileNumber(value);
        break;

      case "Password":
        setPassword(value);
        break;

      case "ConfirmPassword":
        setConfirmPassword(value);
        break;

      case "CollegeName":
        setCollegeName(value);
        break;

      case "CollegeLinkedin":
        setCollegeLinkedin(value);
        break;

      case "CollegeAddress":
        setCollegeAddress(value);

      default:
    }
  };

  /**
   * Function to handler Register submit
   * @param event
   */

  const submitHandler = (e) => {
    e.preventDefault();
    setName((name) => name.trim());
    setEmail((email) => email.trim());
    setMobileNumber((mobileNumber) => mobileNumber.trim());
    setPassword((password) => password.trim());
    setConfirmPassword((confirmPassword) => confirmPassword.trim());
    setCollegeName((collegeName) => collegeName.trim());
    setCollegeLinkedin((collegeLinkedin) => collegeLinkedin.trim());
    setCollegeAddress((collegeAddress) => collegeAddress.trim());

    //Error notification when password and confirm password didn't match
    // if (password !== confirmPassword) {
    //   setError({ message: "Password didn't match" });

    //   return;
    // }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("mobile", mobileNumber);
    formData.append("password", password);
    formData.append("college_name", collegeName);
    formData.append("college_linked_in", collegeLinkedin);
    formData.append("college_add", collegeAddress);
    axios
      .post("http://foliox.deepinferx.in/web/api/admin/register", formData)
      .then((res) => {
        const { success, message } = res.data;

        //if success = 0 something wrong
        if (success === 0) {
          setTimeout(() => {
            // setError({ message });
          }, 100);
        }

        //if success = 1 Registeration successfull
        if (success === 1) {
          props.history.push("/admin/registration-confirmation-overlay");
        }
      })
      .catch((e) => {});
  };

  const classes = useStyles();

  return (
    <form onSubmit={submitHandler} className={classes.root}>
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
                value={name}
                name="Name"
                onChange={handelChange}
                autoFocus
                required
              ></CustomInput>
              <CustomInput
                label="E-mail*"
                background="brown"
                fullWidth
                value={email}
                name="Email"
                onChange={handelChange}
                required
              ></CustomInput>
              <CustomInput
                label="Mobile Number*"
                background="brown"
                fullWidth
                value={mobileNumber}
                name="MobileNumber"
                required
                onChange={handelChange}
              ></CustomInput>
              <CustomInput
                label="Password*"
                background="brown"
                fullWidth
                value={password}
                type="password"
                name="Password"
                required
                onChange={handelChange}
              ></CustomInput>
              <CustomInput
                label="Confirm Password*"
                background="brown"
                fullWidth
                value={confirmPassword}
                name="ConfirmPassword"
                type="password"
                required
                onChange={handelChange}
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
                value={collegeName}
                name="CollegeName"
                required
                onChange={handelChange}
              ></CustomInput>
              <CustomInput
                label="College LinkedIn Profile"
                background="brown"
                fullWidth
                value={collegeLinkedin}
                name="CollegeLinkedin"
                required
                onChange={handelChange}
              ></CustomInput>
              <CustomInput
                background="brown"
                label="College Address *"
                fullWidth
                multiline
                rows="5"
                cols="30"
                value={collegeAddress}
                name="CollegeAddress"
                required
                onChange={handelChange}
              ></CustomInput>
              <CustomButton
                text={"Login"}
                logo={circle}
                to={"/admin/login"}
                background="white"
                border="borderGray"
              />
              <CustomButton
                type="submit"
                text={"Register"}
                background="brown"
              />
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
    </form>
  );
}

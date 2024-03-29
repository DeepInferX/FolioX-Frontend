import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//@material-ui core components
import { Grid, makeStyles } from "@material-ui/core";

import Typography from "components/CustomTypography/Typography";
import CustomInput from "components/CustomInput/CustomInput";
import CustomButton from "components/CustomButton/CustomButton";
import Navbar from "components/Navbar/Navbar";
import Select from "components/Select/Select";

import fx from "assets/logo/fx.png";
import image from "assets/img/admin-login-image.svg";

//action creater
import { login as authLogin, login } from "store/auth";
import { loadCollegeList } from "store/college";
import { login as studentLogin } from "store/student";

const circle = <span>&#9675;&nbsp;</span>;

//style
const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
  form: {
    flexGrow: 1,
  },
}));

export default function Login({ variant }) {
  const classes = useStyle();
  const dispatch = useDispatch();

  const collegeList = useSelector((store) => store.college.list);

  const [loginCredentials, setLoginCredentials] = useState({
    email: undefined,
    password: undefined,
    college_id: undefined,
    roll_no: undefined,
  });

  const setSelectedCollege = (e) => {
    console.log(e.target.value);
    setLoginCredentials({ ...loginCredentials, college_id: e.target.value });
  };

  const theme = variant === "student" ? "purple" : "brown";

  //Dispatch action  to fetch list of registered colleges
  useEffect(() => {
    dispatch(loadCollegeList());
  }, []);

  //Form submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (variant === "student") {
      formData.append("college_id", loginCredentials.college_id);
      formData.append("roll_no", loginCredentials.roll_no);
      formData.append("password", loginCredentials.password);
      dispatch(studentLogin(formData));
    } else {
      formData.append("college_id", loginCredentials.college_id);
      formData.append("email", loginCredentials.email);
      formData.append("password", loginCredentials.password);
      dispatch(authLogin(formData));
    }
  };

  //Check for Admin login
  const user = useSelector((store) => store.auth.user?.auth_token);

  //Check for student login
  const student = useSelector((store) => store.student.id);

  //If login successfull
  const navigate = useNavigate();
  if (user) {
    navigate("../dashboard/home");
  }
  if (student) {
    console.log("routing");
    navigate("../");
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <Grid className={classes.root} container direction="column">
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
            container
            justify="space-around"
            alignItems="center"
            className={classes.form}
            direction="row"
          >
            <Grid item xs={10} sm={4}>
              <Select
                background={theme}
                value={loginCredentials.college_id}
                changeHandler={setSelectedCollege}
                required
              >
                <option value="" disabled selected hidden>
                  Select college
                </option>
                {collegeList.map((college) => (
                  <option key={college.id} value={college.id}>
                    {college.college_name}
                  </option>
                ))}
              </Select>
              <CustomInput
                label={variant === "student" ? "Roll No." : "Email"}
                background={theme}
                fullWidth
                required
                value={
                  variant === "student"
                    ? loginCredentials.roll_no
                    : loginCredentials.email
                }
                onChange={(e) => {
                  if (variant === "student") {
                    setLoginCredentials({
                      ...loginCredentials,
                      roll_no: e.target.value,
                    });
                  } else {
                    setLoginCredentials({
                      ...loginCredentials,
                      email: e.target.value,
                    });
                  }
                }}
              ></CustomInput>
              <CustomInput
                label="Password"
                background={theme}
                fullWidth
                required
                type="password"
                value={loginCredentials.password || ""}
                onChange={(e) =>
                  setLoginCredentials({
                    ...loginCredentials,
                    password: e.target.value,
                  })
                }
              ></CustomInput>
              <CustomButton
                text={"Forgot?"}
                logo={circle}
                to={"/get-started/"}
                background="white"
                border="borderGray"
              />
              <CustomButton
                type="submit"
                text={"Continue"}
                //button will have darker version of theme color
                background={theme}
              />
            </Grid>
          </Grid>
          <Grid item>
            <img src={image} width="300" alt="admin login" />
          </Grid>
        </Grid>
      </form>
    </>
  );
}

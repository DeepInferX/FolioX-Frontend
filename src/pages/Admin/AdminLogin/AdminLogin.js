import React, { useEffect, useContext } from "react";
import { useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Navigate } from "react-router-dom";

//@material-ui core components
import { Grid, makeStyles } from "@material-ui/core";

import Typography from "components/CustomTypography/Typography";
import CustomInput from "components/CustomInput/CustomInput";
import CustomButton from "components/CustomButton/CustomButton";
import Navbar from "components/Navbar/Navbar";
import Select from "components/Select/Select";
import { adminContext } from "pages/Admin/AdminContext";

import fx from "assets/logo/fx.png";
import image from "assets/img/admin-login-image.svg";

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

export default function Landing() {
  const classes = useStyle();

  const [selectedCollege, setSelectedCollege] = useState("");
  const [collegeList, setCollegeList] = useState([]);
  const [error, setError] = useState({ message: "" });
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const { admin, setAdmin } = useContext(adminContext);

  //Api call to get list of registered colleges
  useEffect(() => {
    axios
      .get("http://foliox.deepinferx.in/web/api/gen/colleges")
      .then((res) => {
        const { success } = res.data;
        if (success === 1) {
          setCollegeList(res.data.colleges);
        } else {
          setError({ ...error, message: "Something went wrong!" });
        }
      })
      .catch((e) => console.log(e));
  }, []);

  //Error Notification handler
  useEffect(() => {
    error.message.length > 0 && errorNotification();
  }, [error.message]);

  //Form submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("college_id", selectedCollege);
    formData.append("email", loginCredentials.email);
    formData.append("password", loginCredentials.password);

    axios
      .post("http://foliox.deepinferx.in/web/api/admin/login", formData)
      .then((res) => {
        const { success } = res.data;
        if (success === 1) {
          setAdmin(res.data);
        }
        if (success === 0) {
          setError({ ...error, message: res.data.message });
        }
      }, []);
  };

  //Toast Notification for showing error to users
  const errorNotification = () =>
    toast.error(error.message, {
      position: "bottom-center",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  // const Navigate = useNavigate();
  if (admin) {
    return <Navigate to="/admin/dashboard" replace />;
  }
  return (
    <form onSubmit={submitHandler}>
      <ToastContainer
        position="bottom-center"
        autoClose={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
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
              background="brown"
              value={selectedCollege}
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
              label="Email"
              background="brown"
              fullWidth
              required
              value={loginCredentials.email}
              onChange={(e) =>
                setLoginCredentials({
                  ...loginCredentials,
                  email: e.target.value,
                })
              }
            ></CustomInput>
            <CustomInput
              label="Password"
              background="brown"
              fullWidth
              required
              value={loginCredentials.password}
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
            <CustomButton type="submit" text={"Continue"} background="brown" />
          </Grid>
        </Grid>
        <Grid item >
          <img src={image} width="300" alt="admin login" />
        </Grid>
      </Grid>
    </form>
  );
}

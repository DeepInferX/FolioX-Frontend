import { Grid } from "@material-ui/core";
import React, { useEffect, useContext } from "react";
import Navbar from "components/Navbar/Navbar";
import fx from "assets/logo/fx.png";
import Typography from "components/CustomTypography/Typography";
import useStyles from "assets/style/pages/AdminLogin";
import CustomInput from "components/CustomInput/CustomInput";
import CustomButton from "components/CustomButton/CustomButton";
import image from "assets/img/admin-login-image.svg";
import Select from "components/Select/Select";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { adminContext } from "pages/Admin/AdminContext";
import { Navigate } from "react-router-dom";
const circle = <span>&#9675;&nbsp;</span>;

export default function Landing() {
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

  const classes = useStyles();

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
        <Grid item justify="flex-start">
          <img src={image} width="300" alt="admin login" />
        </Grid>
      </Grid>
    </form>
  );
}

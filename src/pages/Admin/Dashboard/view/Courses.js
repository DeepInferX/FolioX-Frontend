import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumb from "components/BreadCumb/BreadCrumb";
import Footer from "components/Footer/Footer";
import { Divider, makeStyles, Typography } from "@material-ui/core";
import { loadCourse, deleteCourse, addCourse } from "store/course";
import { Form, Formik, Field, ErrorMessage, FieldArray } from "formik";
import { hideModal, showModal } from "store/modal";
import Button from "@material-ui/core/Button";
import Input from "components/CustomInput/CustomInput";
import findUpdatedBranches from "utils/findUpdatedBranches";
import findDeletedBranches from "utils/findDeletedBranches";
import findNewBranches from "utils/findNewBranches";
import { editBranch } from "store/course";
import {notificationError, notificationSuccess} from 'store/notification'
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 30px)",
    maxWidth: 1000,
  },
}));

const CourseHeader = ({ course, toggle, setToggle }) => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid rgba(0,0,0,0.23)",
        padding: "5px 5px 5px 0",
      }}
    >
      <Typography
        style={{
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "13px",
          lineHeight: "15px",
          color: "rgba(0, 0, 0, 0.7)",
        }}
      >
        {course.course_name}
      </Typography>
      {toggle && (
        <div style={{ display: "flex" }}>
          <Button
            style={{ margin: "0px" }}
            onClick={() => {
              dispatch(
                showModal({
                  modalType: "COURSE_DELETE",
                  modalProps: {
                    admin_id: course.admin_id,
                    course_id: course.id,
                  },
                })
              );
            }}
          >
            Delete
          </Button>
          <Button style={{ margin: "0px" }} onClick={() => setToggle(false)}>
            Edit
          </Button>
        </div>
      )}
      {!toggle && <Button onClick={() => setToggle(true)}>Cancel</Button>}
    </div>
  );
};

const Branch = ({ branch }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", width: "50%" }}>
      <p
        style={{
          fontFamily: "Quicksand",
          fontstyle: "normal",
          fontWeight: "500",
          fontSize: "13px",
          lineSeight: "15px",
        }}
      >
        {branch.branch_name}&nbsp;,
      </p>
      <p
        style={{
          fontFamily: "Quicksand",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "12px",
          lineHeight: "15px",
        }}
      >
        {branch.branch_hod}
      </p>
    </div>
  );
};

const EditBranch = ({ course, setToggle }) => {
  const admin_id = useSelector((store) => store.auth.user.access_key.admin_id);
  const dispatch = useDispatch();
  const initialValues = {
    branches: [...course.branches],
  };

  const onSubmit = (values) => {
    const course_id = course.id;
    const orginalBranches = course.branches;

    //Update Branch
    const updatedBranches = findUpdatedBranches({
      orginalBranches,
      newBranches: values.branches,
    });

    //Delete Branch
    const deletedBranches = findDeletedBranches({
      orginalBranches,
      newBranches: values.branches,
    });

    //New Branches
    const newlyAddedBranches = findNewBranches({
      orginalBranches,
      newBranches: values.branches,
    });

  //Dispatch action to save edited branch details
    dispatch(
      editBranch({
        updatedBranches,
        deletedBranches,
        newlyAddedBranches,
        admin_id,
        course_id,
      })
    ).then(res=>{
      dispatch(notificationSuccess(res.message))
      setToggle(true)
    }).catch(error=>{
      dispatch(notificationError(error.message))
    })
  };


  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={onSubmit}
    >
      {({ values }) => (
        <Form>
          <FieldArray name="branches">
            {({ insert, remove, push, replace }) => {
              return (
                <div>
                  {values.branches.map((branch, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Field
                        style={{
                          border: "0.3px solid rgba(0,0,0,0.23)",
                          opacity: 0.7,
                          width: "35%",
                        }}
                        component={Input}
                        type="text"
                        name={`branches.${index}.branch_name`}
                        placeholder="Branch Name"
                      />
                      <Field
                        style={{
                          border: "0.3px solid rgba(0,0,0,0.23)",
                          opacity: 0.7,
                          width: "35%",
                        }}
                        component={Input}
                        type="text"
                        name={`branches.${index}.branch_hod`}
                        placeholder="Hod Name"
                      />
                      <div style={{ marginBottom: "8px" }}>
                        <Button
                          variant="outlined"
                          style={{ marginRight: "16px" }}
                          onClick={() => remove(index)}
                        >
                          Remove
                        </Button>
                        <Button
                          variant="outlined"
                          onClick={() =>
                            replace(index, {
                              ...branch,
                              branch_name: "",
                              branch_hod: "",
                            })
                          }
                        >
                          Reset
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button variant="contained" color="primary" type="submit">
                    Save
                  </Button>
                  <Button
                    style={{ marginLeft: "16px" }}
                    variant="outlined"
                    onClick={() =>
                      push({
                        id: null,
                        course_id: course.id,
                        admin_id: course.admin_id,
                        branch_name: "",
                        branch_hod: "",
                        time: null,
                      })
                    }
                  >
                    Add another row
                  </Button>
                </div>
              );
            }}
          </FieldArray>
        </Form>
      )}
    </Formik>
  );
};

const CourseDetails = ({ course }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <div style={{ transition: "all 5s ease" }}>
      <div>
        <CourseHeader course={course} toggle={toggle} setToggle={setToggle} />
      </div>
      <div style={{ padding: "20px 150px 20px 20px" }}>
        {toggle && (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {course.branches.map((branch, index) => (
              <Branch branch={branch} key={index} />
            ))}
          </div>
        )}
        {!toggle && <EditBranch course={course} setToggle={setToggle} />}
      </div>
    </div>
  );
};

export default function Courses() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [newCourse, setNewCourse] = useState("");
  const admin_id = useSelector((store) => store.auth.user.access_key.admin_id);
  const courses = useSelector((store) => store.course);
  useEffect(() => {
    dispatch(loadCourse(admin_id));
  }, []);

  const addCourseHandler = (e) => {
    e.preventDefault();

    dispatch(
      addCourse({
        admin_id,
        course_name: newCourse,
      })
    );
  };
  return (
    <div className={classes.root}>
      <BreadCrumb
        link1="Courses"
        title="View your courses."
        subtitle="Students will be able to select any one from these courses."
      />
      <div>
        {courses.map((course, index) => (
          <CourseDetails course={course} key={index} />
        ))}
        <div>
          <form onSubmit={addCourseHandler} style={{ display: "flex" }}>
            <Input
              style={{
                width: "300px",
                margin: "0px",
                border: "1px solid rgba(0,0,0,0.23)",
              }}
              type="text"
              placeholder="Add Another Course"
              name="newCourse"
              id="newCourse"
              value={newCourse}
              onChange={(e) => setNewCourse(e.target.value)}
            />
            <Button
              type="submit"
              style={{ marginLeft: "20px" }}
              variant="contained"
              color="primary"
            >
              Continue
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

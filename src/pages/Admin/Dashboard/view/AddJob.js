import React, { useState, useEffect } from "react";
import BreadCrumb from "components/BreadCrumb/BreadCrumb";
import {
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@material-ui/core";
import Input from "components/CustomInput/CustomInput";
import { Form, Formik, Field } from "formik";
import { Editor } from "@tinymce/tinymce-react";
import HeaderUnderline from "components/Header/HeaderUnderline";
import Branch from "components/Branch/Branch";
import Checkbox from "@material-ui/core/Checkbox";

const Summary = () => {
  const [profileImage, setProfileImage] = useState({
    file: null,
    imgURL: null,
  });

  const handleChange = (event) => {
    const { files } = event.target;

    if (files && files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);

      reader.onloadend = () => {
        setProfileImage({
          file: files[0],
          loading: false,
          imgURL: [reader.result],
        });
      };
    }
  };

  const handleClearClick = () => {
    this.setState({
      file: null,
      imgURL: null,
    });
  };

  return (
    <Formik
      initialValues={{
        position: "",
        companyName: "",
        jobLocation: "",
        imageURL: "",
        positionType: "",
        sector: "",
        costToCompany: "",
        companyWebsite: "",
      }}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <HeaderUnderline text="Summary" />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <input
            id="profileImage"
            style={{
              width: "1px",
              height: "1px",
              opacity: "0",
              position: "absolute",
              overflow: "hidden",
              zIndex: "-1",
            }}
            type="file"
            onChange={handleChange}
            accept="image/*"
          />
          <div
            style={{
              border: "0.3px solid rgba(0, 0, 0, 0.23)",
              borderRadius: 4,
              width: "20%",
              position: "relative",
              width: "200px",
              height: "200px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: profileImage.imgURL
                ? `url(${profileImage.imgURL})`
                : null,
            }}
          >
            <label
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "13px",
              }}
              htmlFor="profileImage"
            >
              {!profileImage.imgURL && "Upload Company Image"}
            </label>
          </div>
          <div style={{ width: "35%" }}>
            <Field
              style={{
                border: "0.3px solid rgba(0,0,0,0.23)",
                opacity: 0.7,
                width: "100%",
              }}
              type="text"
              name="position"
              placeholder="Position"
              component={Input}
            />
            <Field
              style={{
                border: "0.3px solid rgba(0,0,0,0.23)",
                opacity: 0.7,
                width: "100%",
              }}
              type="text"
              name="companyName"
              placeholder="Company/Firm Name"
              component={Input}
            />
            <Field
              style={{
                border: "0.3px solid rgba(0,0,0,0.23)",
                opacity: 0.7,
                width: "100%",
              }}
              type="text"
              name="jobLocation"
              placeholder="Job Location"
              component={Input}
            />
            <Field
              style={{
                border: "0.3px solid rgba(0,0,0,0.23)",
                opacity: 0.7,
                width: "100%",
              }}
              type="text"
              name="imageURL"
              placeholder="Paste Image URL"
              component={Input}
            />
          </div>
          <div style={{ width: "35%" }}>
            <Field
              style={{
                border: "0.3px solid rgba(0,0,0,0.23)",
                opacity: 0.7,
                width: "100%",
              }}
              type="text"
              name="positionType"
              placeholder="Position Type"
              component={Input}
            />
            <Field
              style={{
                border: "0.3px solid rgba(0,0,0,0.23)",
                opacity: 0.7,
                width: "100%",
              }}
              type="text"
              name="sector"
              placeholder="Sector"
              component={Input}
            />
            <Field
              style={{
                border: "0.3px solid rgba(0,0,0,0.23)",
                opacity: 0.7,
                width: "100%",
              }}
              type="text"
              name="costToCompany"
              placeholder="Cost To Company (CTC)"
              component={Input}
            />
            <Field
              style={{
                border: "0.3px solid rgba(0,0,0,0.23)",
                opacity: 0.7,
                width: "100%",
              }}
              type="text"
              name="companyWebsite"
              placeholder="Company Website"
              component={Input}
            />
          </div>
        </div>
      </Form>
    </Formik>
  );
};

const AdditionalInfromation = () => {
  const handleEditorChange = (e) => {
    console.log("Content was updated:", e.target.getContent());
  };

  return (
    <div>
      <HeaderUnderline text="Additional Infromation" />
      <div style={{ padding: 20 }}>
        <Editor
          initialValue="<p>Initial content</p>"
          apiKey="kjq5cc2movx329ax261rjfdf514zgazt7csybhiw9jd4doug"
          init={{
            max_chars: 100,
            height: 300,
            menubar: false,
            plugins: [
              "advlist autolink lists link image",
              "charmap print preview anchor help",
              "searchreplace visualblocks code",
              "insertdatetime media table paste wordcount",
            ],
            toolbar:
              "undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help",
          }}
          onChange={handleEditorChange}
        />
      </div>
    </div>
  );
};

const ApplicableCourse = ({ courses }) => {
  const [state, setState] = useState({
    courses: [],
    visibleCourseIndex: 0,
    branchStates: [],
    selectAllStates: [],
  });

  useEffect(() => {
    const mat = new Array(courses.length);
    for (let i = 0; i < mat.length; i++)
      mat[i] = new Array(courses[i].branches.length).fill(false);

    const selectAllStates = new Array(courses.length).fill(false);

    setState({
      ...state,
      courses,
      visibleCourseIndex: 0,
      branchStates: [...mat],
      selectAllStates: [...selectAllStates],
    });
  }, []);

  const courseClickHandler = (visibleCourseIndex) => {
    setState({ ...state, visibleCourseIndex });
  };
  const branchStateHandler = (branchIndex) => {
    const newBranchStates = state.branchStates;
    newBranchStates[state.visibleCourseIndex][branchIndex] =
      !newBranchStates[state.visibleCourseIndex][branchIndex];
    setState({ ...state, branchStates: [...newBranchStates] });
  };

  const selectAllHandler = () => {
    const newSelectAll = state.selectAllStates;
    newSelectAll[state.visibleCourseIndex] =
      !newSelectAll[state.visibleCourseIndex];

    const newBranchStates = state.branchStates;
    if (newSelectAll[state.visibleCourseIndex]) {
      newBranchStates[state.visibleCourseIndex].fill(true);
    } else newBranchStates[state.visibleCourseIndex].fill(false);
    setState({
      ...state,
      selectAllStates: [...newSelectAll],
      branchStates: [...newBranchStates],
    });
  };

  return (
    <div>
      <HeaderUnderline text="Applicable Course" />
      <div style={{ padding: "20px 0 20px 0" }}>
        <div style={{ border: "0.3px solid rgba(0, 0, 0, 0.23)" }}>
          <div style={{ borderBottom: "0.3px solid rgba(0,0,0,0.53)" }}>
            {state.courses.map((course, index) => (
              <button
                style={{
                  marginRight: 20,
                  border: "none",
                  background: "transparent",
                  padding: 10,
                  cursor: "pointer",
                }}
                key={course.id}
                onClick={() => courseClickHandler(index)}
              >
                {course.name}
              </button>
            ))}
          </div>
          <div style={{ padding: "20px 40px 20px 40px" }}>
            <Grid container>
              <Grid item xs={12} style={{ paddingBottom: "10px" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Boolean(
                        state.selectAllStates[state.visibleCourseIndex] | false
                      )}
                      onChange={selectAllHandler}
                      name="selectAllStates"
                    />
                  }
                  label={
                    <Branch
                      branch={{ branch_hod: "Select all course in B.Tech" }}
                    />
                  }
                />
              </Grid>

              {state.courses[state.visibleCourseIndex]?.branches.map(
                (branch, index) => (
                  <Grid container item xs={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={
                            state.branchStates[state.visibleCourseIndex][index]
                          }
                          onChange={() => branchStateHandler(index)}
                          name="checkedA"
                        />
                      }
                      label={<Branch branch={branch} />}
                    />
                  </Grid>
                )
              )}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AddJob() {
  const courses = [
    {
      id: 1,
      name: "B.Tech",
      branches: [
        {
          id: 1,
          branch_name: "Computer Science",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 2,
          branch_name: "Computer Science",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 3,
          branch_name: "Computer Science",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 4,
          branch_name: "Computer Science",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 5,
          branch_name: "Computer Science",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 6,
          branch_name: "Computer Science",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 7,
          branch_name: "Computer Science",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 8,
          branch_name: "Computer Science",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 9,
          branch_name: "Computer Science",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 10,
          branch_name: "Computer Science",
          branch_hod: "Mr Maha Backland",
        },
      ],
    },
    {
      id: 2,
      name: "M.Tech",
      branches: [
        {
          id: 1,
          branch_name: "Mechanical Engineering",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 2,
          branch_name: "Mechanical Engineering",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 3,
          branch_name: "Mechanical Engineering",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 4,
          branch_name: "Mechanical Engineering",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 5,
          branch_name: "Mechanical Engineering",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 6,
          branch_name: "Mechanical Engineering",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 7,
          branch_name: "Mechanical Engineering",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 8,
          branch_name: "Mechanical Engineering",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 9,
          branch_name: "Mechanical Engineering",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 10,
          branch_name: "Mechanical Engineering",
          branch_hod: "Mr Maha Backland",
        },
      ],
    },
    {
      id: 3,
      name: "MBA",
      branches: [
        {
          id: 1,
          branch_name: "Civil Engineering",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 2,
          branch_name: "Civil Engineering",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 3,
          branch_name: "Civil Engineering",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 4,
          branch_name: "Civil Engineering",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 5,
          branch_name: "Civil Engineering",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 6,
          branch_name: "Civil Engineering",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 7,
          branch_name: "Civil Engineering",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 8,
          branch_name: "Civil Engineering",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 9,
          branch_name: "Civil Engineering",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 10,
          branch_name: "Civil Engineering",
          branch_hod: "Mr Maha Backland",
        },
      ],
    },
    {
      id: 4,
      name: "BSc",
      branches: [
        {
          id: 1,
          branch_name: "Bachelor of Science",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 2,
          branch_name: "Bachelor of Science",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 3,
          branch_name: "Bachelor of Science",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 4,
          branch_name: "Bachelor of Science",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 5,
          branch_name: "Bachelor of Science",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 6,
          branch_name: "Bachelor of Science",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 7,
          branch_name: "Bachelor of Science",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 8,
          branch_name: "Bachelor of Science",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 9,
          branch_name: "Bachelor of Science",
          branch_hod: "Mr Maha Backland",
        },
        {
          id: 10,
          branch_name: "Bachelor of Science",
          branch_hod: "Mr Maha Backland",
        },
      ],
    },
  ];
  return (
    <div>
      <BreadCrumb
        link1="Courses"
        title="View your courses."
        subtitle="Students will be able to select any one from these courses."
      />
      <div
        style={{ padding: "20px 150px 20px 0px", border: "1px solid yellow" }}
      >
        <div style={{ border: "2px solid red" }}>
          <Summary />
        </div>
        <div style={{ border: "2px solid black" }}>
          <AdditionalInfromation />
        </div>
        <div style={{ border: "2px solid black" }}>
          <ApplicableCourse courses={courses} />
        </div>
      </div>
    </div>
  );
}

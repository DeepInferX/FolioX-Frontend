import Input from "components/CustomInput/Input";
import { Formik, Form, FieldArray } from "formik";
import { Typography, Divider, Box, Grid, Button } from "@material-ui/core";
import UpdateIcon from "@material-ui/icons/Update";
import { useState } from "react";

const PersonalDetails = ({ editing }) => {
  return (
    <Box
      borderRadius={4}
      boxShadow={3}
      style={{ backgroundColor: "#fff", padding: 30, marginTop: 50 }}
    >
      <Box mb={2}>
        <Box pl={1}>
          <Typography variant="subtitle1">Personal Details</Typography>
        </Box>
        <Divider />
      </Box>
      <Box px={1}>
        <Grid container>
          <Grid item container xs={8} spacing={3}>
            <Grid item xs={6}>
              <Input
                name="personalDetails.fullName"
                variant="basic"
                placeholder="Full Name"
                disabled={!editing}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                name="personalDetails.mobileNumber"
                variant="basic"
                placeholder="Mobile Number"
                disabled={!editing}
              />
            </Grid>

            <Grid item xs={6}>
              <Input
                name="personalDetails.fatherName"
                variant="basic"
                placeholder="Father's Full Name"
                disabled={!editing}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                name="personalDetails.mobileNumber"
                variant="basic"
                placeholder="Mobile Number"
                disabled={!editing}
              />
            </Grid>

            <Grid item xs={6}>
              <Input
                name="personalDetails.fullName"
                variant="basic"
                placeholder="Full Name"
                disabled={!editing}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                name="personalDetails.registrationNo"
                variant="basic"
                placeholder="Registration No."
                disabled={!editing}
              />
            </Grid>

            <Grid item xs={6}>
              <Input
                name="personalDetails.email"
                variant="basic"
                placeholder="Email"
                disabled={!editing}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                name="personalDetails.rollNo"
                variant="basic"
                placeholder="Roll No."
                disabled={!editing}
              />
            </Grid>
          </Grid>
          <Grid item xs={4} container justify="center">
            <img
              width="80%"
              src={process.env.PUBLIC_URL + "/assets/resume_image.svg"}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const UnderGraduateDetails = ({ editing }) => {
  return (
    <Box
      borderRadius={4}
      boxShadow={3}
      style={{ backgroundColor: "#fff", padding: 30, marginTop: 50 }}
    >
      <Box mb={2}>
        <Box pl={1}>
          <Typography variant="subtitle1">Undergraduate Detaills</Typography>
        </Box>
        <Divider />
      </Box>
      <Box px={1}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Input
              name="ug.collegeName"
              variant="basic"
              placeholder="College Name(Full Name)"
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={4}>
            <Input
              name="ug.collegeWebsite"
              variant="basic"
              placeholder="College Website"
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              name="ug.averageSGPA"
              variant="basic"
              placeholder="Average SGPA"
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={4}>
            <Input
              name="ug.selectCourse"
              variant="basic"
              placeholder="Select Course"
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              name="ug.selectBranch"
              variant="basic"
              placeholder="Select Branch"
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={4}>
            <Input
              name="ug.courseStartTime"
              variant="basic"
              placeholder="Course Start Time"
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              name="ug.courseEndTime"
              variant="basic"
              placeholder="Course End Time"
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={4}>
            <Input
              name="ug.gapInYear"
              variant="basic"
              placeholder="Gap in years (NA if not applicable)"
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              name="ug.numberOfBacklogs"
              variant="basic"
              placeholder="Number of Backlogs"
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const PostGraduateDetails = ({ editing }) => {
  return (
    <Box
      borderRadius={4}
      boxShadow={3}
      style={{ backgroundColor: "#fff", padding: 30, marginTop: 50 }}
    >
      <Box mb={2}>
        <Box pl={1}>
          <Typography variant="subtitle1">Undergraduate Detaills</Typography>
        </Box>
        <Divider />
      </Box>
      <Box px={1}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Input
              name="pg.collegeName"
              variant="basic"
              placeholder="College Name(Full Name)"
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={4}>
            <Input
              name="pg.collegeWebsite"
              variant="basic"
              placeholder="College Website"
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              name="pg.averageSGPA"
              variant="basic"
              placeholder="Average SGPA"
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={4}>
            <Input
              name="pg.selectCourse"
              variant="basic"
              placeholder="Select Course"
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              name="pg.selectBranch"
              variant="basic"
              placeholder="Select Branch"
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={4}>
            <Input
              name="pg.courseStartTime"
              variant="basic"
              placeholder="Course Start Time"
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              name="pg.courseEndTime"
              variant="basic"
              placeholder="Course End Time"
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={4}>
            <Input
              name="pg.gapInYear"
              variant="basic"
              placeholder="Gap in years (NA if not applicable)"
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              name="pg.numberOfBacklogs"
              variant="basic"
              placeholder="Number of Backlogs"
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const MatriculationDetails = ({ editing }) => {
  return (
    <Box
      borderRadius={4}
      boxShadow={3}
      style={{ backgroundColor: "#fff", padding: 30, marginTop: 50 }}
    >
      <Box mb={2}>
        <Box pl={1}>
          <Typography variant="subtitle1">Matriculation Detaills</Typography>
        </Box>
        <Divider />
      </Box>
      <Box px={1}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Input
              name="metric.schoolName"
              variant="basic"
              placeholder="School / College Name (Full Name)"
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={4}>
            <Input
              name="ug.percetageAchieved"
              variant="basic"
              placeholder="Percentage Acheived"
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              name="metric.yearOfPassing"
              variant="basic"
              placeholder="Year of passing"
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const IntermediateDetails = ({ editing }) => {
  return (
    <Box
      borderRadius={4}
      boxShadow={3}
      style={{ backgroundColor: "#fff", padding: 30, marginTop: 50 }}
    >
      <Box mb={2}>
        <Box pl={1}>
          <Typography variant="subtitle1">Intermediate Detaills</Typography>
        </Box>
        <Divider />
      </Box>
      <Box px={1}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Input
              name="metric.schoolName"
              variant="basic"
              placeholder="School / College Name (Full Name)"
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={4}>
            <Input
              name="ug.percetageAchieved"
              variant="basic"
              placeholder="Percentage Acheived"
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              name="metric.yearOfPassing"
              variant="basic"
              placeholder="Year of passing"
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const Expreience = ({ editing, values }) => {
  return (
    <Box
      borderRadius={4}
      boxShadow={3}
      style={{ backgroundColor: "#fff", padding: 30, marginTop: 50 }}
    >
      <Box mb={2}>
        <Box pl={1}>
          <Typography variant="subtitle1">
            Work / Internship Experience
          </Typography>
        </Box>

        <Divider />
      </Box>
      <Box px={1}>
        <Form>
          <FieldArray name="expreience">
            {(arrayHelpers) => {
              return (
                <>
                  {values.values.expreience.map((ex, index) => (
                    <Grid container spacing={3}>
                      <Grid item xs={8}>
                        <Input
                          name={`expreience.${index}.company`}
                          variant="basic"
                          placeholder="Company Name"
                          disabled={!editing}
                        />
                      </Grid>
                      <Grid item xs={4}></Grid>

                      <Grid item xs={4}>
                        <Input
                          name={`expreience.${index}.startingTime`}
                          variant="basic"
                          placeholder="Starting Time"
                          disabled={!editing}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Input
                          name={`expreience.${index}.endTime`}
                          variant="basic"
                          placeholder="Ending Time"
                          disabled={!editing}
                        />
                      </Grid>
                      <Grid item xs={4}></Grid>

                      <Grid item xs={4}>
                        <Input
                          name={`expreience.${index}.JobType`}
                          variant="basic"
                          placeholder="Job Type"
                          disabled={!editing}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Input
                          name={`expreience.${index}.jobLocation`}
                          variant="basic"
                          placeholder="Job Location"
                          disabled={!editing}
                        />
                      </Grid>
                      <Grid item xs={4}></Grid>

                      <Grid item xs={8}>
                        <Input
                          name={`expreience.${index}.jobDescription`}
                          variant="basic"
                          placeholder="Job Description"
                          disabled={!editing}
                          multiline
                          rows={5}
                        />
                      </Grid>
                      <Grid item xs={4}></Grid>
                    </Grid>
                  ))}

                  <Box mt={4}>
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={!editing}
                      onClick={() =>
                        arrayHelpers.push({
                          company: "",
                          startingTime: "",
                          endingTime: "",
                          jobType: "",
                          jobLocation: "",
                          jobDescription: "",
                        })
                      }
                    >
                      Add More
                    </Button>
                  </Box>
                </>
              );
            }}
          </FieldArray>
        </Form>
      </Box>
    </Box>
  );
};
const Test = ({ values }) => {
  return (
    <Form>
      <FieldArray name="expreience">
        {(arrayHelpers) => {
          console.log("values", values);
          console.log("arrayHelpers", arrayHelpers);
          return <h1>st</h1>;
        }}
      </FieldArray>
    </Form>
  );
};
export default function StudentDashboard() {
  const [editing, setEditing] = useState(false);
  const initialValues = {
    personalDetails: {
      fullName: "",
      mobileNumber: "",
      fatherName: "",
      registrationNo: "",
      email: "",
      rollNo: "",
    },
    ug: {
      collegeName: "",
      collegeWebsite: "",
      averageSGPA: "",
      selectCourse: "",
      selectBranch: "",
      courseStartTime: "",
      courseEndTime: "",
      gapInYear: "",
      numberOfBacklogs: "",
    },
    pg: {
      collegeName: "",
      collegeWebsite: "",
      averageSGPA: "",
      selectCourse: "",
      selectBranch: "",
      courseStartTime: "",
      courseEndTime: "",
      gapInYear: "",
      numberOfBacklogs: "",
    },
    matric: {
      schoolName: "",
      percentageAcheived: "",
      yearOfPassing: "",
    },
    inter: {
      schoolName: "",
      percentageAcheived: "",
      yearOfPassing: "",
    },
    expreience: [
      {
        company: "",
        startingTime: "",
        endingTime: "",
        jobType: "",
        jobLocation: "",
        jobDescription: "",
      },
    ],
  };
  return (
    <Formik initialValues={initialValues}>
      {(values) => {
        return (
          <Grid container>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                style={{
                  // fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "31px",
                  lineHeight: "46px",
                }}
              >
                Your Resume
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  // font-family: Poppins;
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontHeight: "97.6%",
                }}
              >
                Since you have logged in, you can update your resume at any
                time. We suggest you to do so before appling for jobs.
              </Typography>
              <Typography
                variant="caption"
                styel={{
                  fontStyle: "normal",
                  fontWeight: "300",
                  fontHeight: "97.6%",
                }}
              >
                Please fill in all the required infomation, it will help us to
                recommend you internships and job postings even better. In case
                of any discrepancy or invalid data provided, your account will
                be suspended immediately.
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <PersonalDetails editing={editing} />
              <UnderGraduateDetails editing={editing} />
              <PostGraduateDetails editing={editing} />
              <MatriculationDetails editing={editing} />
              <IntermediateDetails editing={editing} />
              <Expreience editing={editing} values={values} />
              <Grid container justify="flex-end">
                <Box my={5}>
                  <Button
                    variant="contained"
                    color="secondary"
                    disabled={!editing}
                    style={{ marginRight: "16px" }}
                    onClick={() => setEditing((editing) => !editing)}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={!editing}
                  >
                    Apply for changes
                  </Button>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid container justify="center">
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<UpdateIcon>send</UpdateIcon>}
                  onClick={() => setEditing((editing) => !editing)}
                  disabled={editing}
                >
                  Update
                </Button>
              </Grid>
            </Grid>
          </Grid>
        );
      }}
    </Formik>
  );
}

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "components/CustomInput/Input";
import { Formik, Form, FieldArray, useField } from "formik";
import {
  Typography,
  Divider,
  Box,
  Grid,
  Button,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import UpdateIcon from "@material-ui/icons/Update";
import { useState } from "react";
import { loadCourse, updateResume } from "store/student";
import SelectFormik from "components/Select/SelectFormik";

const Img = ({ ...props }) => {
  const [field] = useField(props);
  return <img width="80%" src={field.value} />;
};

const PersonalDetails = () => {
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
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                name="personalDetails.mobileNumber"
                variant="basic"
                placeholder="Mobile Number"
              />
            </Grid>

            <Grid item xs={6}>
              <Input
                name="personalDetails.fatherName"
                variant="basic"
                placeholder="Father's Full Name"
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                name="personalDetails.registrationNo"
                variant="basic"
                placeholder="Registration Number"
              />
            </Grid>

            <Grid item xs={6}>
              <Input
                name="personalDetails.email"
                variant="basic"
                placeholder="Email"
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                name="personalDetails.rollNo"
                variant="basic"
                placeholder="Roll No."
              />
            </Grid>
          </Grid>
          <Grid item xs={4} container justify="center">
            <Img width="80%" name="personalDetails.photoUrl" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const UnderGraduateDetails = ({ formik }) => {
  const branches = useSelector((store) =>
    Object.values(store.student.branches)
  );

  const getBranchesByCourseId = (courseId) => {
    return branches.filter((branch) => branch.course_id === courseId);
  };

  const { values, handleChange, setFieldValue } = formik;
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
            />
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={4}>
            <Input
              name="ug.collegeWebsite"
              variant="basic"
              placeholder="College Website"
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              name="ug.averageSGPA"
              variant="basic"
              placeholder="Average SGPA"
            />
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={4}>
            <SelectFormik
              name="ug.course"
              variant="basic"
              onChange={(e) => {
                const courseId = e.target.value;
                const branches = getBranchesByCourseId(courseId);
                setFieldValue("ug.course", courseId);
                setFieldValue("ug.branches", []);
                setFieldValue("ug.branches", branches);
              }}
            >
              <option value="">Select Course</option>
              {values.ug.courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.course_name}
                </option>
              ))}
            </SelectFormik>
          </Grid>
          <Grid item xs={4}>
            <SelectFormik name="ug.branch" variant="basic">
              <option value="">Select Branch</option>
              {values.ug.branches.map((branch) => (
                <option value={branch.id} key={branch.id}>
                  {branch.branch_name}
                </option>
              ))}
            </SelectFormik>
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={4}>
            <Input
              name="ug.courseStartTime"
              variant="basic"
              placeholder="Course Start Time"
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              name="ug.courseEndTime"
              variant="basic"
              placeholder="Course End Time"
            />
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={4}>
            <Input
              name="ug.gapInYear"
              variant="basic"
              placeholder="Gap in years (NA if not applicable)"
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              name="ug.numberOfBacklogs"
              variant="basic"
              placeholder="Number of Backlogs"
            />
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const PostGraduateDetails = ({ formik }) => {
  const branches = useSelector((store) =>
    Object.values(store.student.branches)
  );

  const getBranchesByCourseId = (courseId) => {
    return branches.filter((branch) => branch.course_id === courseId);
  };
  const {
    values: { pg },
    setFieldValue,
    ...rest
  } = formik;
  return (
    <Box
      borderRadius={4}
      boxShadow={3}
      style={{ backgroundColor: "#fff", padding: 30, marginTop: 50 }}
    >
      <Box mb={2}>
        <Box pl={1}>
          <Grid container alignItems="center" justify="space-between">
            <Typography variant="subtitle1">Post Graduate Detaills</Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={pg.status == 3}
                  onChange={(e) => setFieldValue("pg.status", !pg.status)}
                  name="checkedB"
                  color="primary"
                />
              }
              label="check this if not applicable"
            />
          </Grid>
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
              disabled={pg.status == 3}
            />
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={4}>
            <Input
              name="pg.collegeWebsite"
              variant="basic"
              placeholder="College Website"
              disabled={pg.status == 3}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              name="pg.averageSGPA"
              variant="basic"
              placeholder="Average SGPA"
              disabled={pg.status == 3}
            />
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={4}>
            <SelectFormik
              name="pg.course"
              variant="basic"
              onChange={(e) => {
                const courseId = e.target.value;
                const branches = getBranchesByCourseId(courseId);
                setFieldValue("pg.course", courseId);
                setFieldValue("pg.branches", []);
                setFieldValue("pg.branches", branches);
              }}
              disabled={pg.status == 3}
            >
              <option value="">Select Course</option>
              {pg.courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.course_name}
                </option>
              ))}
            </SelectFormik>
          </Grid>
          <Grid item xs={4}>
            <SelectFormik
              name="pg.branch"
              variant="basic"
              disabled={pg.status == 3}
            >
              <option value="">Select Branch</option>
              {pg.branches.map((branch) => (
                <option value={branch.id} key={branch.id}>
                  {branch.branch_name}
                </option>
              ))}
            </SelectFormik>
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={4}>
            <Input
              name="pg.courseStartTime"
              variant="basic"
              placeholder="Course Start Time"
              disabled={pg.status == 3}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              name="pg.courseEndTime"
              variant="basic"
              placeholder="Course End Time"
              disabled={pg.status == 3}
            />
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={4}>
            <Input
              name="pg.gapInYear"
              variant="basic"
              placeholder="Gap in years (NA if not applicable)"
              disabled={pg.status == 3}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              name="pg.numberOfBacklogs"
              variant="basic"
              placeholder="Number of Backlogs"
              disabled={pg.status == 3}
            />
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const MatriculationDetails = () => {
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
              name="matric.schoolName"
              variant="basic"
              placeholder="School / College Name (Full Name)"
            />
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={4}>
            <Input
              name="matric.percentageAcheived"
              variant="basic"
              placeholder="Percentage Acheived"
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              name="matric.yearOfPassing"
              variant="basic"
              placeholder="Year of passing"
            />
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const IntermediateDetails = () => {
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
              name="inter.schoolName"
              variant="basic"
              placeholder="School / College Name (Full Name)"
            />
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={4}>
            <Input
              name="inter.percentageAcheived"
              variant="basic"
              placeholder="Percentage Acheived"
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              name="inter.yearOfPassing"
              variant="basic"
              placeholder="Year of passing"
            />
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const Expreience = ({ formik }) => {
  const {
    values: { expreience },
  } = formik;
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
                  {expreience.map((ex, index) => (
                    <Box pb={5}>
                      <Grid container spacing={3}>
                        <Grid item xs={8}>
                          <Input
                            name={`expreience.${index}.company_name`}
                            variant="basic"
                            placeholder="Company Name"
                          />
                        </Grid>
                        <Grid item xs={4}></Grid>

                        <Grid item xs={4}>
                          <Input
                            name={`expreience.${index}.starting_date`}
                            variant="basic"
                            placeholder="Starting Time"
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <Input
                            name={`expreience.${index}.ending_date`}
                            variant="basic"
                            placeholder="Ending Time"
                          />
                        </Grid>
                        <Grid item xs={4}></Grid>

                        <Grid item xs={4}>
                          <SelectFormik
                            variant="basic"
                            name={`expreience.${index}.job_type`}
                          >
                            <option value="">Selct Job Type</option>
                            <option value="1">Fulltime</option>
                            <option value="2">Part-Time</option>
                            <option value="3">Freelance</option>
                            <option value="4">Internship</option>
                            <option value="5">Contract</option>
                          </SelectFormik>
                        </Grid>
                        <Grid item xs={4}>
                          <Input
                            name={`expreience.${index}.job_loc`}
                            variant="basic"
                            placeholder="Job Location"
                          />
                        </Grid>
                        <Grid item xs={4}></Grid>

                        <Grid item xs={8}>
                          <Input
                            name={`expreience.${index}.job_desc`}
                            variant="basic"
                            placeholder="Job Description"
                            multiline
                            rows={5}
                          />
                          <Box mt={1}>
                            <Button
                              style={{ backgroundColor: "#F6F7FB" }}
                              variant="contained"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              {ex.id ? "Remove" : "Cancel"}
                            </Button>
                          </Box>
                        </Grid>
                        <Grid item xs={4}></Grid>
                      </Grid>
                    </Box>
                  ))}
                  <Grid container justify="flex-end">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() =>
                        arrayHelpers.push({
                          student_id: "1",
                          company_name: "",
                          starting_date: "",
                          ending_date: "",
                          job_type: "",
                          job_loc: "",
                          job_desc: "",
                          verified_by_admin: "0",
                        })
                      }
                    >
                      Add More
                    </Button>
                  </Grid>
                </>
              );
            }}
          </FieldArray>
        </Form>
      </Box>
    </Box>
  );
};

export default function StudentDashboard() {
  const student = useSelector((store) => store.student);
  const courses = useSelector((store) => Object.values(store.student.courses));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCourse(student.id));
  }, []);
  const initialValues = {
    personalDetails: {
      fullName: student.name,
      mobileNumber: student.mobile,
      fatherName: student.father_name,
      registrationNo: student.reg_no,
      email: student.email,
      rollNo: student.roll_no,
      photoUrl: `http://foliox.deepinferx.in/web/assets/${student.photo_url}`,
    },
    ug: {
      collegeName: student.student_ug_details.college_name,
      collegeWebsite: student.student_ug_details.college_website,
      averageSGPA: student.student_ug_details.avg_sgpa,
      course: "",
      branch: "",
      courses: courses,
      branches: [],
      courseStartTime: student.student_ug_details.course_start,
      courseEndTime: student.student_ug_details.course_end,
      gapInYear: student.student_ug_details.gap_in_years,
      numberOfBacklogs: student.student_ug_details.no_of_backlogs,
    },
    pg: {
      status: student.pg_details,
      collegeName: "",
      collegeWebsite: "",
      averageSGPA: "",
      course: "",
      branch: "",
      courses: courses,
      branches: [],
      courseStartTime: "",
      courseEndTime: "",
      gapInYear: "",
      numberOfBacklogs: "",
    },
    matric: {
      schoolName: student.student_matric_and_inter_details.mat_school_name,
      percentageAcheived:
        student.student_matric_and_inter_details.mat_percentage,
      yearOfPassing:
        student.student_matric_and_inter_details.mat_year_of_passing,
    },
    inter: {
      schoolName: student.student_matric_and_inter_details.inter_school_name,
      percentageAcheived:
        student.student_matric_and_inter_details.inter_percentage,
      yearOfPassing:
        student.student_matric_and_inter_details.inter_year_of_passing,
    },
    expreience: student.student_work_experience,
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => dispatch(updateResume(values, student.id))}
    >
      {(formik) => {
        return (
          <Form>
            <Grid container>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  style={{
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
                  recommend you internships and job postings even better. In
                  case of any discrepancy or invalid data provided, your account
                  will be suspended immediately.
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <PersonalDetails />
                <UnderGraduateDetails formik={formik} />
                <PostGraduateDetails formik={formik} />
                <MatriculationDetails />
                <IntermediateDetails />
                <Expreience formik={formik} />
                <Grid container justify="flex-end">
                  <Box my={5}>
                    <Button type="submit" variant="contained" color="primary">
                      Apply for changes
                    </Button>
                  </Box>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <Grid container justify="center"></Grid>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
}

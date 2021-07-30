const convertToFormData = (resume, studentId) => {
  console.log(resume);
  console.log(studentId);
  const formData = new FormData();
  formData.append("student_id", studentId);
  formData.append("reg_no", resume.personalDetails.registrationNo);
  formData.append("fathers_name", resume.personalDetails.fatherName);
  formData.append("ug_applicable", 1);
  formData.append("ug_college_name", resume.ug.collegeName);
  formData.append("ug_college_website", resume.ug.collegeWebsite);
  formData.append("ug_avg_sgpa", resume.ug.averageSGPA);
  formData.append("ug_course_id", resume.ug.course);
  formData.append("ug_branch_id", resume.ug.branch);
  formData.append("ug_course_start", resume.ug.courseStartTime);
  formData.append("ug_course_end", resume.ug.courseEndTime);
  formData.append("ug_gap_in_years", resume.ug.gapInYear);
  formData.append("ug_no_of_backlogs", resume.ug.numberOfBacklogs);

  if (resume.pg.status != 3) {
    formData.append("pg_applicable", 1);
    formData.append("pg_college_name", resume.pg.collegeName);
    formData.append("pg_college_webiste", resume.pg.collegeWebsite);
    formData.append("pg_avg_sgpa", resume.pg.averageSGPA);
    formData.append("pg_course_id", resume.pg.course);
    formData.append("pg_branch_id", resume.pg.branch);
    formData.append("pg_course-start", resume.pg.courseStartTime);
    formData.append("pg_course_end", resume.pg.courseEndTime);
    formData.append("pg_gap_in_years", resume.pg.gapInYear);
    formData.append("pg_no_of_backlogs", resume.pg.numberOfBacklogs);
  } else {
    formData.append("pg_applicable", 2);
  }

  formData.append("matric_and_inter_applicable", 1);
  formData.append("mat_school_name", resume.matric.schoolName);
  formData.append("mat_percentage", resume.matric.Acheived);
  formData.append("mat_year_of_passing", resume.matric.yearOfPassing);

  formData.append("inter_school_name", resume.inter.schoolName);
  formData.append("inter_percentage", resume.inter.Acheived);
  formData.append("inter_year_of_passing", resume.inter.yearOfPassing);

  if (resume.expreience.legth > 0) {
    formData.append("work_exp_applicable", 1);
    let companyNames = resume.expreience[0].company_name;
    for (let i = 1; i < resume.expreience.length; i++)
      companyNames += "*" + resume.expreience[i].company_name;
    formData.append("work_exp_company_name", companyNames);

    let startingDates = resume.expreience[0].starting_date;
    for (let i = 1; i < resume.expreience.length; i++)
      startingDates += "*" + resume.expreience[i].starting_date;
    formData.append("work_exp_starting_date", startingDates);

    let endingDates = resume.expreience[0].ending_date;
    for (let i = 1; i < resume.expreience.length; i++)
      endingDates += "*" + resume.expreience[i].ending_date;
    formData.append("work_exp_ending_date", endingDates);

    let jobTypes = resume.expreience[0].job_type;
    for (let i = 1; i < resume.expreience.length; i++)
      jobTypes += "*" + resume.expreience[i].job_type;
    formData.append("work_exp_job_type", jobTypes);

    let jobLocations = resume.expreience[0].job_loc;
    for (let i = 1; i < resume.expreience.length; i++)
      jobLocations += "*" + resume.expreience[i].job_loc;
    formData.append("work_exp_job_loc", jobLocations);

    let descriptions = resume.expreience[0].job_desc;
    for (let i = 1; i < resume.expreience.length; i++)
      descriptions += "*" + resume.expreience[i].job_desc;
    formData.append("work_exp_job_desc", descriptions);
  } else {
    formData.append("work_exp_applicable", 2);
  }
  return formData;
};
export default convertToFormData;

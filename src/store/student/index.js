import axios from "axios";
import { notificationError, notificationSuccess } from "store/notification";
import { normalize, schema } from "normalizr";
import { ContactsOutlined } from "@material-ui/icons";
import convertToFormData from "utils/convertToFormData";

//constant
const STUDENT_LOGIN_REQUEST = "STUDENT_LOGIN_REQUEST";
const STUDENT_LOGIN_SUCESS = "STUDENT_LOGIN_SUCCESS";
const STUDENT_LOGIN_FAILED = "STUDENT_LOGIN_FAILED";

const STUDENT_LOAD_COURSE_REQUEST = "STUDENT_LOAD_COURSE_REQUEST";
const STUDENT_LOAD_COURSE_FAILED = "STUDENT_LOAD_COURSE_FAILED";
const STUDENT_LOAD_COURSE_SUCCESS = "STUDENT_LOAD_COURSE_SUCCESS";

const LOAD_JOB_POSTING_REQUEST = "LOAD_JOB_POSTING_REQUEST";
const LOAD_JOB_POSTING_SUCCESS = "LOAD_JOB_POSTING_SUCCESS";
const LOAD_JOB_POSTING_FAILED = "LOAD_JOB_POSTING_FAILED";

const UPDATE_RESUME_REQUEST = "UPDATE_RESUME_REQUEST";
const UPDATE_RESUME_SUCCESS = "UPDATE_RESUME_SUCCESS";
const UPDATE_RESUME_FAILED = "UPDATE_RESUME_FAILED";

//action creater

const loginRequest = () => {
  return {
    type: STUDENT_LOGIN_REQUEST,
    isLoding: true,
  };
};

const loginFailed = () => {
  return {
    type: STUDENT_LOGIN_FAILED,
    isLoding: false,
  };
};

const loginSuccess = (student) => {
  return {
    type: STUDENT_LOGIN_SUCESS,
    isLoding: false,
    payload: student,
  };
};

const login = (user) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const {
        data: { success, student, message },
      } = await axios.post("/student/login", user);

      //Error from server
      if (success === 0) throw { message };

      dispatch(loginSuccess(student));
    } catch (error) {
      dispatch(loginFailed());
      dispatch(notificationError(error.message));
    }
  };
};

const loadCourseRequest = () => {
  return {
    type: STUDENT_LOAD_COURSE_REQUEST,
    isLoading: true,
  };
};

const loadCourseSuccess = (entities) => {
  return {
    type: STUDENT_LOAD_COURSE_SUCCESS,
    payload: entities,
  };
};

const loadCourse = (student_id) => {
  return async (dispatch) => {
    dispatch(loadCourseRequest());
    try {
      const { data } = await axios.get("/student/courses", {
        params: {
          student_id,
        },
      });
      if (data.success === 0) throw data;

      //Normalize data returned from api
      const branch = new schema.Entity("branches");
      const course = new schema.Entity("courses", { branches: [branch] });
      const mySchema = { courses: [course] };
      const normalizedData = normalize(data, mySchema);
      dispatch(loadCourseSuccess(normalizedData.entities));
    } catch (error) {
      dispatch(loginFailed());
      dispatch(notificationError(error.message));
    }
  };
};

const loadJobRequest = () => {
  return {
    type: LOAD_JOB_POSTING_REQUEST,
    isLoading: true,
  };
};

const loadJobPostingsFailed = () => {
  return {
    type: LOAD_JOB_POSTING_FAILED,
    isLoading: false,
  };
};

const loadJobPostingsSuccess = (jobs) => {
  return { type: LOAD_JOB_POSTING_SUCCESS, payload: jobs };
};

const loadJobPostings = (studentId) => {
  return async (dispatch) => {
    dispatch(loadJobRequest());
    try {
      const { data } = await axios.get("student/job/list", {
        params: {
          student_id: 1,
        },
      });
      if (data.success === 0) throw data;

      const job = new schema.Entity("jobs");
      const mySchema = { postings: [job] };
      const normalizedData = normalize(data, mySchema);
      dispatch(loadJobPostingsSuccess(normalizedData.entities.jobs));
    } catch (error) {
      dispatch(loadJobPostings());
      dispatch(notificationError(error.message));
    }
  };
};

const updateResumeRequest = () => {
  return {
    type: UPDATE_RESUME_REQUEST,
    isLoading: true,
  };
};

const updateResumeFailed = () => {
  return {
    type: UPDATE_RESUME_FAILED,
    isLoading: false,
  };
};

const updateResume = (resume, studentId) => {
  return async (dispatch) => {
    dispatch(updateResumeRequest());
    try {
      const formDatat = convertToFormData(resume, studentId);
      const { data } = await axios.post("/student/resume", formDatat);
      console.log(data);
      if (data.success === 0) throw data;
      dispatch(notificationSuccess(data.message));
    } catch (error) {
      dispatch(updateResumeFailed());
      dispatch(notificationError(error.message));
    }
  };
};

//reducer

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_LOGIN_REQUEST:
      return state;

    case STUDENT_LOGIN_FAILED:
      return state;

    case STUDENT_LOGIN_SUCESS:
      return Object.assign({}, action.payload);

    case STUDENT_LOAD_COURSE_SUCCESS:
      return Object.assign({}, { ...state }, { ...action.payload });

    case LOAD_JOB_POSTING_SUCCESS:
      return { ...state, jobs: action.payload };

    default:
      return state;
  }
};

export { login, loadCourse, loadJobPostings, updateResume };
export default reducer;

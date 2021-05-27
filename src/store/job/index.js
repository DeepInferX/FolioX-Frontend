import axios from "axios";

//constants
const JOBS_LOAD_REQUEST = "JOBS_LOAD_REQUEST";
const JOBS_LOAD_SUCCESS = "JOBS_LOAD_SUCCESS";
const JOBS_LOAD_FAILED = "JOBS_LOAD_FAILED";

//action creater
const loadJobsRequest = () => ({
  type: JOBS_LOAD_REQUEST,
  isLoading: true,
});

const loadJobsSuccess = (jobs) => ({
  type: JOBS_LOAD_SUCCESS,
  isLoading: false,
  payload: {
    jobs,
  },
});

const loadJobs = () => {
  return async (dispatch) => {
    dispatch(loadJobsRequest());

    try {
      await setTimeout(() => {
        const jobs = [
          {
            id: 1,
            admin_id: 1,
            company_name: "Amazon",
            position: "SDE",
          },
          {
            id: 2,
            admin_id: 1,
            company_name: "Goldman Sachs",
            position: "SDE",
          },
          {
            id: 3,
            admin_id: 1,
            company_name: "Google",
            position: "SDE",
          },
        ];
        dispatch(loadJobsSuccess(jobs));
      }, 2000);
    } catch (error) {}
  };
};

//reducer
const jobReducer = (state = [], action) => {
  switch (action.type) {
    case JOBS_LOAD_SUCCESS:
      return [...action.payload.jobs];
    default:
      return state;
  }
};

export { loadJobs };
export default jobReducer;

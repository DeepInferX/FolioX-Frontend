import axios from "axios";
import { notificationError, notificationSuccess } from "store/notification";
import toString from "utils/toStream";
//constants
const COURSE_LOAD_REQUEST = "COURSE_LOAD_REQUEST";
const COURSE_LOAD_SUCCESS = "COURSE_LOAD_SUCCESS";
const COURSE_LOAD_FAILED = "COURSE_LOAD_FAILED";

const COURSE_DELETE_REQUEST = "COURSE_DELETE_REQUEST";
const COURSE_DELETE_SUCCESS = "COURSE_DELETE_SUCCESS";
const COURSE_DELETE_FAILED = "COURSE_DELETE_FAILED";

const COURSE_ADD_REQUEST = "COURSE_ADD_REQUEST";
const COURSE_ADD_FAILED = "COURSE_ADD_FAILED";
const COURSE_ADD_SUCCESS = "COURSE_ADD_SUCCESS";

const BRANCHES_EDIT_REQUEST = "BRANCHES_EDIT_REQUEST";
const BRANCHES_EDIT_SUCCESS = "BRANCHES_EDIT_SUCCESS";

//action creater
const loadCourseRequest = () => {
  return {
    type: COURSE_LOAD_REQUEST,
    isLoading: true,
  };
};

const loadCourseFailed = () => {
  return {
    type: COURSE_LOAD_FAILED,
    isLoading: false,
  };
};

const loadCourseSuccess = (courses) => {
  return {
    type: COURSE_LOAD_SUCCESS,
    payload: courses,
    isLoading: false,
  };
};

const loadCourse = (admin_id) => {
  return async (dispatch) => {
    console.log('load course', admin_id)
    dispatch(loadCourseRequest());
    try {
      const { data } = await axios.get("/admin/courses/get", {
        params: {
          admin_id,
        },
      });

      if (data.success === 0) {
        throw data;
      }
      dispatch(loadCourseSuccess(data.courses));
    } catch (error) {
      dispatch(loadCourseFailed());
      dispatch(notificationError(error.message));
    }
  };
};

const deleteCourseRequest = () => {
  return {
    type: COURSE_DELETE_REQUEST,
    isLoading: true,
  };
};

const deleteCourseFailed = () => {
  return {
    type: COURSE_DELETE_FAILED,
    isLoading: false,
  };
};

const deleteCourseSuccess = (course_id) => {
  return {
    type: COURSE_DELETE_SUCCESS,
    isLoading: false,
    payload: {
      course_id: course_id,
    },
  };
};

const deleteCourse = ({ admin_id, course_id }) => {
  return async (dispatch) => {
    dispatch(deleteCourseRequest());

    try {
      const fd = new FormData();
      fd.append("admin_id", admin_id);
      fd.append("course_id", course_id);
      const { data } = await axios.post("/admin/courses/del", fd);

      if (data.success === 0) {
        throw data;
      }
      dispatch(deleteCourseSuccess(course_id));
      dispatch(notificationSuccess(data.message));
    } catch (error) {
      dispatch(deleteCourseFailed());
      dispatch(notificationError(error.message));
    }
  };
};

const addCourseRequest = () => {
  return {
    type: COURSE_ADD_REQUEST,
    isLoading: true,
  };
};

const addCourseFailed = () => {
  return {
    type: COURSE_ADD_FAILED,
    isLoading: false,
  };
};

const addCourseSuccess = (course) => {
  return {
    type: COURSE_ADD_SUCCESS,
    isLoading: false,
    payload: {
      course,
    },
  };
};

const addCourse = ({ admin_id, course_name }) => {
  return async (dispatch) => {
    dispatch(addCourseRequest());
    try {
      const fd = new FormData();
      fd.append("admin_id", admin_id);
      fd.append("course_name", course_name);
      console.log("admin_id", admin_id, "course_name", course_name);
      const { data } = await axios.post("/admin/courses/new", fd);
      if (data.success === 0) {
        throw data;
      }
      dispatch(addCourseSuccess(data.course));
      dispatch(notificationSuccess(data.message));
    } catch (error) {
      dispatch(addCourseFailed());
      dispatch(notificationError(error.message));
    }
  };
};

const editBranchesRequest = () => ({
  type: BRANCHES_EDIT_REQUEST,
  isLoading: true,
});

const editBranchesSuccess = ({ course_id, branches }) => ({
  type: BRANCHES_EDIT_SUCCESS,
  payload: {
    branches,
    course_id,
  },
});

const editBranch = ({
  deletedBranches,
  updatedBranches,
  newlyAddedBranches,
  admin_id,
  course_id,
}) => {
  return dispatch => {
    return new Promise((resolve, reject)=>{
      const save = async () => {
        dispatch(editBranchesRequest());
        const error = [];

        //Side effect for deleting branches on server
        if (deletedBranches.length > 0) {
          try {
            const idString = toString({ array: deletedBranches, key: "id" });
            const fd = new FormData();
            fd.append("admin_id", admin_id);
            fd.append("branch_id", idString);
            const { data } = await axios.post("/admin/courses/branch/del", fd);

            if (data.success === 0) throw data;
          } catch (err) {
            error.push(err.message);
          }
        }

        //Side effect for updating branches on server
        if (updatedBranches.length > 0) {
          try {
            const idString = toString({ array: updatedBranches, key: "id" });
            const nameString = toString({
              array: updatedBranches,
              key: "branch_name",
            });
            const hodString = toString({
              array: updatedBranches,
              key: "branch_hod",
            });

            const fd = new FormData();
            fd.append("admin_id", admin_id);
            fd.append("branch_id", idString);
            fd.append("branch_name", nameString);
            fd.append("branch_hod", hodString);
            const { data } = await axios.post("/admin/courses/branch/edit", fd);
            if (data.success === 0) throw data;
          } catch (err) {
            error.push(err.message);
          }
        }

        //Side effect for adding new branches on server
        if (newlyAddedBranches.length > 0) {
          try {
            const nameString = toString({
              array: newlyAddedBranches,
              key: "branch_name",
            });
            const hodString = toString({
              array: newlyAddedBranches,
              key: "branch_hod",
            });
            const fd = new FormData();
            fd.append("admin_id", admin_id);
            fd.append("course_id", course_id);
            fd.append("branch_name", nameString);
            fd.append("branch_hod", hodString);
            const { data } = await axios.post("/admin/courses/add", fd);
            if (data.success === 0) throw data;
          } catch (err) {
            error.push(err.message);
          }
        }

        //Side effect for getting updated branch list
        try {
          const { data } = await axios.get("/admin/courses/branch/get", {
            params: {
              admin_id,
              course_id,
            },
          });
          dispatch(
            editBranchesSuccess({
              branches: data.branches,
              course_id,
            })
          );
        } catch (err) {
          error.push(err.message);
        }

        if (error.length > 0) {
          reject({message: JSON.stringify(error, null, 2)})
        } else{
          resolve({message: "Branch details saved successfully"})
        }
      }
      save()
    })
  }
};

//reducer

const courseReducer = (state = [], action) => {
  switch (action.type) {
    case COURSE_LOAD_SUCCESS:
      return [...action.payload];

    case COURSE_DELETE_SUCCESS:
      const course_id = action.payload.course_id;
      return [...state.filter((course) => course.id !== course_id)];

    case COURSE_ADD_SUCCESS:
      return [...state, action.payload.course];
    case BRANCHES_EDIT_SUCCESS:
      return [
        ...state.map((course) => {
          if (course.id === action.payload.course_id) {
            return {
              ...course,
              branches: [...action.payload.branches],
            };
          }
          return { ...course };
        }),
      ];
    default:
      return state;
  }
};

//export

export { loadCourse, deleteCourse, addCourse, editBranch };

export default courseReducer;

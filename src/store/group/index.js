import axios from "axios";
import { notificationError,notificationSuccess } from "store/notification";

//constant
const GROUP_LOAD_REQUEST = "GROUP_LOAD_REQUEST";
const GROUP_LOAD_SUCCESS = "GROU_LOAD_SUCCESS";
const GROUP_LOAD_FAILED = "GROUP_LOAD_FAILED";

const GROUP_DELETE_REQUEST = "GROUP_DELETE_REQUEST";
const GROUP_DELETE_SUCCESS = "GROUP_DELETE_SUCCESS";
const GROUP_DELETE_FAILED = "GROUP_DELETE_FAILED";

const DELETE_STUDENT_REQUEST = "DELETE_STUDENT_REQUEST";
const DELETE_STUDENT_SUCCESS = "DELETE_STUDENT_SUCCESS";
const DELETE_STUDENT_FAILED = "DELETE_STUDENT_FAILED";

const UPDATE_STUDENT_REQUEST = "UPDATE_STUDENT_REQUEST";
const UPDATE_STUDENT_SUCCESS = "UPDATE_STUDENT_SUCCESS";
const UPDATE_STUDENT_FAILED = "UPDATE_STUDENT_FAILED";

const ADD_STUDENT_REQUEST = "ADD_STUDENT_REQUEST"
const ADD_STUDENT_SUCCESS = "ADD_STUDENT_SUCCESS"
const ADD_STUDENT_FAILED = "ADD_STUDENT_FAILED"

const ADD_GROUP_REQUEST = 'ADD_GROUP_REQUEST'
const ADD_GROUP_SUCCESS = 'ADD_GROUP_SUCCESS'
const ADD_GROUP_FAILED = 'ADD_GROUP_FAILED'

//action creater

const addGroup = (group) => {
  return dispatch => {
    return new Promise((resolve, reject)=>{
      dispatch({type: ADD_GROUP_REQUEST, isLoading: true})
      const add = async () => {
        try{
          const res = await axios.post('/admin/students/groups/add', group)
          if(res.data.success === 0)
            throw res.data
          dispatch({type:ADD_GROUP_SUCCESS, isLoading: false, payload: res.data.group_details})
          dispatch(notificationSuccess(res.data.message))
          resolve(res.data.group_details)
        }catch(error){
          dispatch({type:ADD_GROUP_FAILED, isLoading: false})
          dispatch(notificationError(error.message))
          reject()
        }
      }
      add()
    })
  }
} 


const addStudent = (data) => {

  return  dispatch => {
    return  new Promise((resolve, reject)=>{
      dispatch({type: ADD_STUDENT_REQUEST, isLoading: true})
      fetch = async () => {
        try{
          const fd = new FormData();
          fd.append('admin_id', data.admin_id)
          fd.append('college_id', data.college_id)
          fd.append('group_id', data.group_id)
          fd.append('name', data.name)
          fd.append('email', data.email)
          fd.append('roll_no', data.roll_no)
          fd.append('mobile', data.mobile)
          
          const res = await axios.post('/admin/students/add',fd)
          if(res.data.success === 0)
          throw res.data
          dispatch({type: ADD_STUDENT_SUCCESS, isLoading: false, payload: res.data.student_details})
          resolve({message: res.data.message})
          
        }catch(error){
          dispatch({type: ADD_STUDENT_FAILED, isLoading: false})
          reject({message: error.message})
        }
      }

      fetch()

    })
  }
}

const loadGroups = (id) => {
  return async (dispatch) => {
    dispatch({type: GROUP_LOAD_REQUEST, isLoading: true,});
    try {
      const res = await axios(
        `http://foliox.deepinferx.in/web/api/admin/students/groups/get?admin=${id}`
      );
      const {
        data: { groups },
      } = res;
      dispatch({ type: GROUP_LOAD_SUCCESS, payload: groups, isLoading: false,});
    } catch (error) {
      dispatch({ type: GROUP_LOAD_FAILED, isLoading: false,});
      dispatch(notificationError(error.message));
    }
  };
};



const deleteGroup = (group_id, admin_id) => {
  console.log(group_id, admin_id)
  return async (dispatch) => {
    dispatch({type: GROUP_DELETE_REQUEST, isLoading: true});

    try {
      const fd = new FormData();
      fd.append('admin', admin_id)
      fd.append('group', group_id)
      const res = await axios.post("/admin/students/groups/delete",
        fd
      );
      if (res.data.success === 0) {
        throw res.data;
      }
      dispatch({type: GROUP_DELETE_SUCCESS, isLoading: false, payload: group_id});
      dispatch(notificationSuccess(res.data.message));
    } catch (error) {
      dispatch({type: GROUP_DELETE_FAILED, isLoading: false});
      dispatch(notificationError(error.message));
    }
  };
};

const deleteStudent = (student, admin_id) => {
  return async (dispatch) => {
    dispatch({
      type: DELETE_STUDENT_REQUEST,
      isLoading: true,
    });
    try {
      const fd = new FormData();
      fd.append('admin_id', admin_id)
      fd.append('student_id', student.id);
      const res = await axios.post("/admin/students/delete", fd);
      if (res.data.success === 0) {
        throw { message: res.data.message };
      }
      dispatch({ type: DELETE_STUDENT_SUCCESS,payload: student, isLoading: false });
      dispatch(notificationSuccess(res.data.message));
    } catch (error) {
      dispatch({
        type: DELETE_STUDENT_FAILED,
        isLoading: false,
      });
      dispatch(notificationError(error.message));
    }
  };
};

const updateStudent = (student, admin_id) => {
  return async (dispatch) => {
    dispatch({
      type: UPDATE_STUDENT_REQUEST,
      isLoading: true,
    });

    try {
      const fd = new FormData();
      fd.append('admin_id', admin_id);
      fd.append('student_id', student.id);
      fd.append('name', student.name);
      fd.append('email', student.email);
      fd.append('mobile', student.mobile);
      fd.append('pass', student.password);
      
      const res = await axios.post("/admin/students/update", fd, {
        headers: {
          'Content-type':'multipart/form-data'
        }
      });
      if (res.data.success === 0) throw { message: res.data.message };
      dispatch({ type: UPDATE_STUDENT_SUCCESS, payload: student, isLoading: false });
      dispatch(notificationSuccess(res.data.message));
    } catch (error) {
      dispatch({ type: UPDATE_STUDENT_FAILED, isLoading: false });
      dispatch(notificationError(error.message));
    }
  };
};

//reducer

const groupReducer = (state = {}, action) => {
  switch (action.type) {
    case GROUP_LOAD_SUCCESS:
      return {
        ...state,
        groups: action.payload,
      }

    case DELETE_STUDENT_SUCCESS: 
      {
        const deletedStudent = action.payload
        const group_id = deletedStudent.group_id
        const student_id = deletedStudent.id
        const studentGroup = state.groups.filter(group=>group.id === group_id)[0]  
        const remainingGroup = state.groups.filter(group => group.id !== group_id)
        return {
          ...state,
          groups: [...remainingGroup, {
            ...studentGroup,
            students: [...studentGroup.students.filter(student => student.id !== student_id)]
          }]
        };
      }
      

    case UPDATE_STUDENT_SUCCESS:
      {
        const updatedStudent = action.payload
        const group_id = updatedStudent.group_id
        const student_id = updatedStudent.id
        const studentGroup = state.groups.filter(group=>group.id === group_id)[0]
        const remainingGroup = state.groups.filter(group => group.id !== group_id)
        return {
            ...state,
            groups: [...remainingGroup,{
              ...studentGroup,
              students: [...studentGroup.students.filter(student => student.id !== student_id), {...updatedStudent}]
            }]
          }
      } 


    case GROUP_DELETE_SUCCESS: 
    {
      const group_id = action.payload
      return {
        ...state,
        groups: [...state.groups.filter(group => group.id != group_id)]
      }
    }
      
    case ADD_STUDENT_SUCCESS:
    {
      const newStudent = action.payload
      const group_id = newStudent.group_id
      const remainingGroup = state.groups.filter(group=>group.id !== group_id)
      const newStudentGroup = state.groups.filter(group => group.id === group_id)[0]
      return {
        ...state,
        groups: [...remainingGroup, {
          ...newStudentGroup,
          students: [...newStudentGroup.students, newStudent]
        }]
      }
    }

    case ADD_GROUP_SUCCESS: 
    {
      const group = action.payload
      return {
        ...state,
        groups: [...state.group, group]
      }
    }
    default:
      return state;
  }
};

//export

export default groupReducer;
export { loadGroups, deleteGroup, deleteStudent, updateStudent, addStudent, addGroup };

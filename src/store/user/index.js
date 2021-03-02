import axios from 'axios'
import * as message from 'store/message'
//constant
const GROUP_REQUEST = 'GROUP_REQUEST'
const GROUP_SUCCESS = 'GROUP_SUCCESS'
const GROUP_FAILED = 'GROUP_FAILED'


//action creater

const fetch = ()=>{
  return async (dispatch) =>{
    dispatch({ type: GROUP_REQUEST})
    try{

    }catch(error){
      dispatch({type: GROUP_FAILED})
      dispatch(message.error(error.message))
    }
  }
}

//reducer


//export
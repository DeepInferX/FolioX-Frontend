import {notificationError, notificationSuccess} from 'store/notification';
import axios from 'axios';

//constants
const SEND_MESSAGE_REQUEST = 'SEND_MESSAGE_REQUEST';
const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
const SEND_MESSAGE_FAILED = 'SEND_MESSAGE_FAILED';


//action creater
const sendMessageToStudent = (data) => {
    const  url = '/admin/students/message'

    return async (dispatch)=> {
        dispatch({type: SEND_MESSAGE_REQUEST, isLoading: true });
        try{
            const res = await axios.post(url,  data)
            if(res.data.success === 0){
                throw res;
            }
            dispatch(notificationSuccess(res.message))
            dispatch({type: SEND_MESSAGE_SUCCESS, isLoading: false})
        }catch(error){
            dispatch(notificationError(error.message))
            dispatch({type: SEND_MESSAGE_FAILED, isLoading: false})
        }
    }
}

const sendMessageToGroup = (data) => {
    const url = '/admin/students/groups/message'

    return async (dispatch) => {
        dispatch({type: SEND_MESSAGE_REQUEST, isLoading: true})
        try{
            const fd = new FormData()
            fd.append('admin_id', data.admin_id)
            fd.append('group_id', data.group_id)
            fd.append('message', data.message)
            const res = await axios.post(url, fd)
            if(res.data.success === 0){
                throw res.data  ;
            }
            dispatch(notificationSuccess(res.data.message))
            dispatch({type: SEND_MESSAGE_SUCCESS, isLoading: false})

        } catch(error){

            dispatch(notificationError(error.message))
            dispatch({type: SEND_MESSAGE_FAILED, isLoading: false})
        }
        
    }
}

export {sendMessageToGroup, sendMessageToStudent};
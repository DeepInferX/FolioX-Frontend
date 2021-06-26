import axios from 'axios'
import {notificationError, notificationSuccess} from 'store/notification'

//constant
const STUDENT_LOGIN_REQUEST = 'STUDENT_LOGIN_REQUEST';
const STUDENT_LOGIN_SUCESS = 'STUDENT_LOGIN_SUCCESS';
const STUDENT_LOGIN_FAILED = 'STUDENT_LOGIN_FAILED';


//action creater

const loginRequest = () => {
return {
    type: STUDENT_LOGIN_REQUEST,
    isLoding: true,
}
}

const loginFailed = () =>{
return {
    type: STUDENT_LOGIN_FAILED,
    isLoding: false
}
}

const loginSuccess = () => {

}

const login = () => {

}

//reducer

const initialState = {

}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case STUDENT_LOGIN_REQUEST:
            return state;
        
        case STUDENT_LOGIN_FAILED:
            return state;

        case STUDENT_LOGIN_SUCESS:
            return {

            }

        default:
            return state

    }
}

export {login}
export default reducer;
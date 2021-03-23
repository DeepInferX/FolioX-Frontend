//constants
const SHOW_MODAL = 'SHOW_MODAL'
const HIDE_MODAL = 'HIDE_MODAL'
//action creater

const showModal = ({modalType, modalProps}) => {
    return {
        type: SHOW_MODAL,
        payload: {
            modalType,
            modalProps,
        }
    }
}

const hideModal = () => {
    return {
        type: HIDE_MODAL
    }
}

const initialState = {
    modalType: null,
    modalProps: {}
}

//reducer
const modalReducer = (state = initialState, action) => {
    switch(action.type){
        case SHOW_MODAL:
            return {
                modalType: action.payload.modalType,
                modalProps: action.payload.modalProps
            }
        case HIDE_MODAL:
            return initialState

        default: 
            return state
    }
}


export {showModal, hideModal}
export default modalReducer
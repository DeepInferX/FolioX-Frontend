import React from 'react'
import AddStudentModal from 'components/Modal/AddStudentModal'
export default function ModalRoot({modalType, modalProps}) {
    const MODAL_COMPONENTS = {
        'ADD_STUDENT': AddStudentModal
    }
    if(!modalType)
        return null;

    const SpecificModal = MODAL_COMPONENTS[modalType]
    return (
        <div>
            <SpecificModal open={true} modalProps={modalProps} />
            <h1>Add new student Modal</h1>
        </div>
    )
}

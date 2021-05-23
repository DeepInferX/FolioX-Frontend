import React from "react";
import AddStudentModal from "components/Modal/AddStudentModal";
import DeleteConfirmationModal from "components/Modal/DeleteConfirmationModal";
export default function ModalRoot({ modalType, modalProps }) {
  const MODAL_COMPONENTS = {
    ADD_STUDENT: AddStudentModal,
    COURSE_DELETE: DeleteConfirmationModal,
  };
  if (!modalType) return null;

  const SpecificModal = MODAL_COMPONENTS[modalType];
  if (!SpecificModal) return null;
  return (
    <div>
      <SpecificModal open={true} modalProps={modalProps} />
      <h1>Add new student Modal</h1>
    </div>
  );
}

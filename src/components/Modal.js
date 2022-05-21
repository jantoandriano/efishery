import React from "react";

const Modal = ({ setIsOpen, children }) => {
  return (
    <>
      <div className="modal-dark" onClick={() => setIsOpen(false)} />
      <div className="modal-container">
        <div className="modal-body">
          <button className="modal-btn-close" onClick={() => setIsOpen(false)}>
            Close
          </button>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;

import React from 'react';

const Modal = ({ children, setIsShowing }) => {
  return (
    <div className="modal open" id="modal-new-note">
      <div className="modal-bg modal-exit"></div>
      <div className="modal-container">
        {React.cloneElement(children, { setIsShowing })}
      </div>
    </div>
  );
};
export default Modal;

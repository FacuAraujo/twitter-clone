import React from 'react';
import ReactDOM from 'react-dom';

import './styles/Modal.scss';

const Modal = ({ isOpen, children, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="Modal" onClick={onClose}>
      <div className="Modal__container">{children}</div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;

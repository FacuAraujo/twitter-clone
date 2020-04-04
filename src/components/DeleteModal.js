import React from 'react';

import Modal from './Modal';

const DeleteTweetModal = props => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="DeleteBadgeModal">
        <h1>¿Estás seguro?</h1>
        <p>Estas a punto de eliminar este tweet</p>

        <div>
          <button onClick={props.onDeleteTweet} className="btn btn-danger mr-4">
            Eliminar
          </button>
          <button onClick={props.onClose} className="btn btn-primary">
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteTweetModal;

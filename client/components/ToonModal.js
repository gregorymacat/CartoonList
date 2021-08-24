import React from 'react';
import UserForm from './UserForm';

var ToonModal = function() {
  return (
    <div className="cartoon-modal-background">
      <div className="cartoon-modal-body">
        <UserForm/>
      </div>
    </div>
  )
}

export default ToonModal;
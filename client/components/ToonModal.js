import React from 'react';
import UserForm from './UserForm';

import {useSelector, useDispatch} from 'react-redux';
import {selectEntry, updateEntry} from './listSlice';

var ToonModal = function() {
  var selectedShow = useSelector((state) => state.list.selectedShow)
  var dispatch = useDispatch();
  if (selectedShow === null) {
    return null;
  }

  var clickHandler = function(userInput) {
    dispatch(updateEntry([selectedShow[0], userInput]));
  }

  return (
    <div className="cartoon-modal-background"
      onClick={(event)=>{event.target === event.currentTarget ? dispatch(selectEntry(null)) : null}}>
      <div className="cartoon-modal-body">
        <UserForm handleClick={clickHandler} currentShow={selectedShow[1]}/>
      </div>
    </div>
  )
}

export default ToonModal;
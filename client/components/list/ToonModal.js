import React from 'react';
import UserForm from './UserForm';

import {useSelector, useDispatch} from 'react-redux';
import {selectEntry, updateEntry, removeEntry} from './listSlice';

var ToonModal = function(props) {
  var selectedShow = useSelector((state) => state.list.selectedShow)
  var dispatch = useDispatch();

  var clickHandler = (action, userInput) => {
    if (action === 'save') {
      dispatch(updateEntry([selectedShow[0], userInput]));
      dispatch(selectEntry(null));
    } else if (action === 'remove') {
      dispatch(removeEntry([selectedShow[0]]));
      dispatch(selectEntry(null));
    }
  }

  var hideModal = (event) => {
    if (event.target === event.currentTarget) {
      dispatch(selectEntry(null));
      props.toggle('toon');
    }
  }

  return (
    <div className="cartoon-modal-background" onClick={(e) => {hideModal(e)}}>
      <div className="cartoon-modal-body">
        <UserForm handleClick={clickHandler} currentShow={selectedShow[1]}/>
      </div>
    </div>
  )
}

export default ToonModal;
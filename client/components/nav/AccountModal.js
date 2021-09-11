import React from 'react';
import AccountForm from './AccountForm';

import {useSelector, useDispatch} from 'react-redux';
import {createAccount} from './navSlice';

var AccountModal = function(props) {
  const dispatch = useDispatch();
  var accountInfo = useSelector((state) => state.nav);

  var hideModal = (event) => {
    if (event.target === event.currentTarget) {
      props.toggle('account');
    }
  }
  var clickHandler = (userInput) => {
    dispatch(createAccount(userInput));
    props.toggle('account');
  }

  return (
    <div className="modal-background account" onClick={(e) => {hideModal(e)}}>
      <div className="modal-body account">
        <AccountForm handleClick={clickHandler} account={accountInfo}/>
      </div>
    </div>
  )
}

export default AccountModal;
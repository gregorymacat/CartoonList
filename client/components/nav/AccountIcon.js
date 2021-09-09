import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {createAccount} from './navSlice';


var AccountIcon = function() {
  const dispatch = useDispatch();
  var onClick = () => {
    dispatch()
  }

  return (
    <React.Fragment>
      <i className="material-icons-outlined account">account_circle</i>

    </React.Fragment>
  )
}



export default AccountIcon;
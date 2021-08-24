import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectEntry} from './listSlice';

var ToonList = function() {
  var userShows = useSelector((state) => state.list.userShows);
  console.log(userShows);

  return (
    <div className="user-cartoon-list">
      {
        userShows.map((currentShow) => {
          return (
            <div>
              <img src={currentShow.image} alt='image of show'></img>
              <span>{currentShow.name}</span>
              <span>{currentShow.score}</span>
              <span>{currentShow.description}</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default ToonList;
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectEntry} from './listSlice';

var ToonList = function() {
  var userShows = useSelector((state) => state.list.userShows);
  var dispatch = useDispatch();

  return (
    <div className="user-cartoon-list">
      {
        Object.values(userShows).map((currentShow, index) => {
          return (
            <div className="cartoon-list-entry"  key={index} data-index={index}>
              <img src={currentShow.image} alt='image of show'
                onClick={() => {dispatch(selectEntry([index, currentShow]))}}></img>
              <div className="cartoon-list-entry-text">
                <div className="cartoon-list-entry-top">
                  <span>{currentShow.name}</span>
                  <span>Score: {currentShow.userInfo.score}</span>
                </div>
                <span className="cartoon-list-entry-bottom">{currentShow.description}</span>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ToonList;
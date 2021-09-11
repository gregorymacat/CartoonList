import React from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {addEntry, removeEntry} from '../list/listSlice';

var SearchResults = function(props) {
  var allShows = useSelector((state) => state.list.allShows);
  var dispatch = useDispatch();

  var results = [];
  for (var index = 0; index < allShows.length; index++) {
    var show = allShows[index];
    if (show.name.toLowerCase().includes(props.search)) {
      results.push(show);
    }
  }

  return(
    <div className="nav-search-results">
      {results.map((show, index) => {
        return (
          <div key={index} className="nav-search-result-entry"
            onClick={()=>{
              dispatch(addEntry(show));
              props.handleClick();
            }}
          >{show.name}</div>
        )
      })}
    </div>
  )
}

export default SearchResults;
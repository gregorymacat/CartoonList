import React from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {addEntry, removeEntry} from './listSlice';

var SearchResults = function(props) {
  var allShows = useSelector((state) => state.list.allShows);
  var dispatch = useDispatch();

  var results = [];
  for (var [index, show] of Object.entries(allShows)) {
    // console.log(show.name, ' ', props.search);
    if (show.name.toLowerCase().includes(props.search)) {
      results.push({[index]: show});
    }
  }

  // console.log(results);

  return(
    <div className="nav-search-results">
      {results.map((show) => {
        return (
          <div className="nav-search-result-entry"
            onClick={()=>{dispatch(addEntry(show))}}>
              {show[Object.keys(show)[0]].name}</div>
        )
      })}
    </div>
  )
}

export default SearchResults;

//{() => {dispatch(selectEntry([Object.keys(show)[0], show[Object.keys(show)[0]]]))}}
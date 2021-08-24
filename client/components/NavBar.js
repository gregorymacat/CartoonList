import React from 'react';

var NavBar = function() {
    return(
      <nav>
        <h1>CartoonList</h1>
        <div className="nav-search-bar">
          <label>Search</label>
          <input type="text"></input>
          <img src="https://img.icons8.com/fluency-systems-regular/24/000000/search--v1.png"/>
        </div>
      </nav>
    )
}

export default NavBar;
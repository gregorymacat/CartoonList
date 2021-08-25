import React from 'react';
import SearchResults from './SearchResults'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSearch: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = function(event) {
    var search = event.target.value;
    var results = [];

    if (search.length > 1) {
      this.setState({userSearch: search});
    } else {
      this.setState({userSearch: ''});
    }
  }

  render() {
    return(
      <nav>
        <h1>CartoonList</h1>
        <div className="nav-search-bar">
          <label>Search</label>
          <input onChange={this.handleChange} type="text"></input>
          {this.state.userSearch ? <SearchResults search={this.state.userSearch}/> : null}
          <img src="https://img.icons8.com/fluency-systems-regular/24/000000/search--v1.png"/>
        </div>
      </nav>
    )
  }
}

export default NavBar;
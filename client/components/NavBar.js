import React from 'react';
import SearchResults from './SearchResults'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSearch: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = (event) => {
    var search = event.target.value;
    if (search.length > 0) {
      this.setState({userSearch: search});
    } else if (search.length === 0) {
      this.setState({userSearch: ''});
    }
  }
  handleClick = () => {
    this.setState({userSearch: ''});
  }

  render() {
    return (
      <nav>
        <h1>CartoonList</h1>
        <div className="nav-search-bar">
          <i className="material-icons-outlined account">account_circle</i>
          <label>Search</label>
          <input onChange={this.handleChange} value={this.state.userSearch} type="text"></input>
          {this.state.userSearch.length > 2 ?
          <SearchResults search={this.state.userSearch} handleClick={this.handleClick}/> : null}
          <i className="material-icons-outlined search">search</i>
        </div>
      </nav>
    )
  }
}

export default NavBar;
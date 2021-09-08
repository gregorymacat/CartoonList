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
          <label>Search</label>
          <input onChange={this.handleChange} value={this.state.userSearch} type="text"></input>
          {this.state.userSearch.length > 2 ?
          <SearchResults search={this.state.userSearch} handleClick={this.handleClick}/> : null}
          <img src="https://img.icons8.com/fluency-systems-regular/24/000000/search--v1.png"/>
        </div>
      </nav>
    )
  }
}

export default NavBar;
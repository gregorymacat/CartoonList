import React from 'react';

class UserForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      status: this.props.currentShow.userInfo.status || 'Watching',
      watchCount: this.props.currentShow.userInfo.watchCount || null,
      score: this.props.currentShow.score || null,
      rewatchCount: this.props.currentShow.userInfo.rewatchCount || null,
      review: this.props.currentShow.userInfo.review || null
    }

    this.changeHandler = this.changeHandler.bind(this);
    this.selectHandler = this.selectHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  };

  changeHandler = function(event) {
    if (event.target.id === 'watchCount'){
      this.setState({watchCount: event.target.value});
    } else if (event.target.id === 'score'){
      this.setState({score: event.target.value});
    } else if (event.target.id === 'review') {
      this.setState({review: event.target.value});
    } else if (event.target.id === 'rewatchCount') {
      this.setState({rewatchCount: event.target.value});
    } else if (event.target.id === 'status') {
      this.setState({status: event.target.value});
    }
  }
  selectHandler = function(event) {
    this.setState({status: event.target.value});
  }
  submitHandler = function(event) {
    event.preventDefault();
    var stateCopy = this.state;
    this.props.handleClick(stateCopy);
  }


  render() {
    var current = this.props.currentShow.userInfo;
    return(
      <form className="user-cartoon-form" onChange={this.changeHandler}>
        <div className="user-cartoon-form-top">
          <label>
            Completion Status
            <select id="status" onChange={this.changeHandler} defaultValue={current.status}>
              <option value="Watching">Watching</option>
              <option value="Completed">Completed</option>
              <option value="Plan to Watch">Plan to Watch</option>
              <option value="Dropped">Dropped</option>
            </select>
          </label>
          <label>
            Episodes Watched
            <input id="watchCount" type="number" min="0" defaultValue={current.watchCount || ""}></input>
          </label>
        </div>
        <div className="user-cartoon-form-mid">
          <label>
            Score
            <input id="score" type="number" min="1" max="100" defaultValue={current.score || null}></input>
          </label>
          <label>
            Rewatched Count
            <input id="rewatchCount" type="number" min="0" defaultValue={current.rewatchCount || null}></input>
          </label>
        </div>
        <div className="user-cartoon-form-lower">
          <label>
            Review
          </label>
          <textarea id="review" type="text" rows ="10" cols="50" defaultValue={current.review || ""}></textarea>
        </div>
        <div className="user-cartoon-form-bottom">
          <button onClick={this.submitHandler}>
            Save
          </button>
        </div>
      </form>
    )
  }
}

export default UserForm;
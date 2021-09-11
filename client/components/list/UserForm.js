import React from 'react';

class UserForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      status: this.props.currentShow.userInfo.status || 'Watching',
      watchCount: this.props.currentShow.userInfo.watchCount || null,
      score: this.props.currentShow.userInfo.score || null,
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
    if (event.target.id === 'remove') {
      this.props.handleClick('remove');
    } else if (event.target.id === 'save') {
      var stateCopy = this.state;
      this.props.handleClick('save', stateCopy);
    }
  }

  render() {
    var current = this.props.currentShow.userInfo;
    return(
      <form className="user-cartoon-form" onChange={this.changeHandler}>
        <label className="user-cartoon-form-status">
          Completion Status
          <select id="status" onChange={this.changeHandler} defaultValue={current.status}>
            <option value="Watching">Watching</option>
            <option value="Completed">Completed</option>
            <option value="Plan to Watch">Plan to Watch</option>
            <option value="Dropped">Dropped</option>
          </select>
        </label>
        <label className="user-cartoon-form-score">
          Score
          <input id="score" type="number" min="1" max="100" defaultValue={current.score || null}></input>
        </label>
        <label className="user-cartoon-form-watched">
          Episodes Watched
          <input id="watchCount" type="number" min="0" defaultValue={current.watchCount || ""}></input>
        </label>
        <label className="user-cartoon-form-rewatch">
          Rewatched Count
          <input id="rewatchCount" type="number" min="0" defaultValue={current.rewatchCount || null}></input>
        </label>
        <div className="user-cartoon-form-review">
          <label>
            Review
          </label>
          <textarea id="review" type="text" rows ="10" cols="50" defaultValue={current.review || ""}></textarea>
        </div>
        <button className="user-cartoon-form-close" id="remove" onClick={this.submitHandler}>
          Delete
        </button>
        <button className="user-cartoon-form-save" id="save" onClick={this.submitHandler}>
          Save
        </button>
      </form>
    )
  }
}

export default UserForm;
import React from 'react';

class UserForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      status: '',
      watchCount: 0,
      score: '',
      rewatchCount: 0,
      review: ''
    }

    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  };

  changeHandler = function(event) {

  }
  clickHandler = function(event) {

  }

  render() {
    return(
      <form className="user-cartoon-form">
        <div className="user-cartoon-form-top">
          <label>
            Completion Status
            <select type="text">
              <option value="Watching">Watching</option>
              <option value="Completed">Completed</option>
              <option value="Plan to Watch">Plan to Watch</option>
              <option value="Dropped">Dropped</option>
            </select>
          </label>
          <label>
            Episodes Watched
            <input type="number" min="0"></input>
          </label>
        </div>
        <div className="user-cartoon-form-mid">
          <label>
            Score
            <input type="number" min="1" max="100"></input>
          </label>
          <label>
            Rewatched Count
            <input type="number" min="0"></input>
          </label>
        </div>
        <div className="user-cartoon-form-lower">
          <label>
            Review
          </label>
          <textarea type="text" rows ="10" cols="50"></textarea>
        </div>
        <div className="user-cartoon-form-bottom">
          <button>
            Save
          </button>
        </div>
      </form>
    )
  }
}

export default UserForm;
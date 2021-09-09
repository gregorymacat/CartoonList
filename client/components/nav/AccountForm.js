import React from 'react';

class UserForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: this.props.account.username || '',
      password: this.props.account.password || '',
      email: this.props.account.email || '',
      age: this.props.account.age || -1,
    }

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  };

  changeHandler = function(event) {
    if (event.target.id === 'username'){
      this.setState({username: event.target.value});
    } else if (event.target.id === 'password'){
      this.setState({password: event.target.value});
    } else if (event.target.id === 'email') {
      this.setState({email: event.target.value});
    } else if (event.target.id === 'age') {
      this.setState({age: event.target.value});
    }
  }
  submitHandler = function(event) {
    event.preventDefault();

    var stateCopy = this.state;
    this.props.handleClick(stateCopy);
  }

  render() {
    var current = this.props.account;
    return(
      <form className="user-account-form" onChange={this.changeHandler}>
        <label className="user-account-form-username">
          Username
          <input id="username" type="text" defaultValue={current.username || ""}></input>
        </label>
        <label className="user-account-form-password">
          Password (must be at least 6 characters long)
          <input id="password" type="text" minLength="6" defaultValue={current.password || ""}></input>
        </label>
        <label className="user-account-form-email">
          Email Address
          <input id="email" type="text" defaultValue={current.email || ""}></input>
        </label>
        <label className="user-account-form-age">
          Age
          <input id="age" type="number" min="1" max="115" defaultValue={current.age || 0}></input>
        </label>
        <button className="user-account-form-submit" onClick={this.submitHandler}>
          Create Account
        </button>
      </form>
    )
  }
}

export default UserForm;
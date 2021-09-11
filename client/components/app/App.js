import React from 'react';
import ToonList from '../list/ToonList';
import NavBar from '../nav/NavBar';
import ToonModal from '../list/ToonModal';
import AccountModal from '../nav/AccountModal';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dispToonModal: false,
      dispAccModal: false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal = (modalType) => {
    if (modalType === 'toon') {
      var toggleDisplay = !this.state.dispToonModal;
      this.setState({dispToonModal: toggleDisplay});
    } else if (modalType === 'account') {
      var toggleDisplay = !this.state.dispAccModal;
      this.setState({dispAccModal: toggleDisplay});
    }
  }

  render(){
    return(
    <React.Fragment>
      <NavBar toggle={this.toggleModal}/>
      <ToonList toggle={this.toggleModal}/>
      {this.state.dispToonModal ? <ToonModal toggle={this.toggleModal}/> : null}
      {this.state.dispAccModal ? <AccountModal toggle={this.toggleModal}/> : null}
    </React.Fragment>
    )
  }
}

export default App;
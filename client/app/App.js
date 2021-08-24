import React from 'react';
import ToonList from '../components/ToonList';
import NavBar from '../components/NavBar';
import ToonModal from '../components/ToonModal';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
    <React.Fragment>
      <NavBar/>
      <ToonList/>
      <ToonModal/>
    </React.Fragment>
    )
  }
}

export default App;
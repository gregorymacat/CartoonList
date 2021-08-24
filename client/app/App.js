import React from 'react';
import ToonList from '../components/ToonList';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <ToonList/>
    )
  }
}

export default App;
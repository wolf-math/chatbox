import React, { Component }  from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      messages: [ ],
      searchField: ''
    }

  }

  render() {
    return(
      <>
        <div className="chatList">

        </div>
      </>
    )
  }
}

export default App;

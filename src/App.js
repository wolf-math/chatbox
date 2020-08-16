import React, { Component }  from 'react';
import './App.css';

import ChatWindow from './components/chatWindow/ChatWindow';
// import message from './components/message/message';
import Form from './components/Form/Form';

class App extends Component {
  constructor() {
    super();

    this.state = {
      messages: [],
    }

  }

  render() {
    return(
      <>
        <ChatWindow />
        <Form />
      </>
    )
  }
}

export default App;

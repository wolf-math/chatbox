import React, { Component }  from 'react';
import './App.css';

import ChatWindow from './components/chatWindow/ChatWindow';
import Form from './components/Form/Form';
import MyContext, { Context } from './context/context';

class App extends Component {

  render() {

    return(
      <>
      <MyContext>
        <ChatWindow />
        <Form />
      </MyContext>
      </>
    )
  }
}

export default App;

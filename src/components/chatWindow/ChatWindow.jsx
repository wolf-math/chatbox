import React, { Component }  from 'react';
import './ChatWindow.scss';

import Form from '../Form/Form'

const DUMMY_DATA = [
    {
        senderID: "lobo",
        text: "What's up dog?",
    },
    {
        senderID: "lobo",
        text: "I like yogurt, just like terry!"
    }
]

class ChatWindow extends Component {
  constructor() {
    super();

    this.state = {
      messages: [ ],
    }

  }

  render() {
    return(
        <div className="message-list">
            {DUMMY_DATA.map((message, index) => {
                return(
                    <div key={index} className="message">
                        <div className="message-text">{message.text}</div>
                        <div className="message-username">{message.senderID}</div>
                    </div>
                )
            })}
        </div>
    )
  }
}

export default ChatWindow;
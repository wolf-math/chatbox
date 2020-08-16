import React, { Component, useContext }  from 'react';
import { Context } from '../../context/context';
import './ChatWindow.scss';

const ChatWindow = () => {
  const {messages} = useContext(Context)
    return(
      <div className="message-list">
        {messages.map((message, index) => {
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

export default ChatWindow;
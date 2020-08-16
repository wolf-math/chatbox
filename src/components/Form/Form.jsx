import React, { Component, useState, useContext }  from 'react';
import { Context } from '../../context/context';
import './Form.scss';

const setInputText = (set) => (e) => {
  set(e.target.value)
}

const handleSubmit = (sendMessage) => (e) => {
  console.log(e)
  sendMessage({senderID: "Aaron", text: "Wolf" })
  e.preventDefault()
}


const Form = () => {
  const [message, setMessage] = useState('')
  const [username, setUsername] = useState('')

  const {messages:contextMessage, sendMessage} = useContext(Context)
  console.log("ContextMessage")
  console.log(contextMessage)
  return(
    <div className="a1">
      <form onSubmit={handleSubmit(sendMessage)}>
        <div>
          <input type='text' 
            size="50"
            placeholder='message' 
            name='message'
            maxLength="140"
            value={message}
            onChange={setInputText(setMessage)} />
          <input type='text' 
            size="20"
            placeholder='user name' 
            name='username'
            maxLength="20"
            value={username}
            onChange={setInputText(setUsername)} />
          </div>
      <button type="submit">Send</button>
      </form>
    </div>
  )
}


export default Form;
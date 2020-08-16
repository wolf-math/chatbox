import React, { useState } from 'react';

const { createContext } = require("react");

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

const contextObject = {messages: DUMMY_DATA, sendMessage: () => {
    
}}


export const Context = createContext(contextObject);

const useMessageHook = () => {
    const [messages, setMessages] = useState(DUMMY_DATA)
    return [messages, (val) => {setMessages([...messages, val])}]
}

export const MyContext = (props) => {
    const [messages, setMessages] = useMessageHook()
    return (
        <>
        <Context.Provider value={{messages, sendMessage: setMessages}} >
            {props.children}
        </ Context.Provider>
        </>
    )
}

export default MyContext;
import React, { useContext } from 'react';
import { Context } from '../context/context';

const Test = (props) => {
    const {message, sendMessage} = useContext(Context)
    return (
        <div onClick={sendMessage}>
            <h1>test</h1>
        </div>
    )
}

export default Test
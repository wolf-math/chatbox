import React, { Component }  from 'react';
import './Form.scss';

class Form extends Component {

  constructor(props) {
    super(props)

    this.state = {
      messages: ''
    }
  }

  newMessage = (e) => {
    this.setState({messages: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
  }


  render() {
    return(
      <div className="a1">
        <form onSubmit={this.handleSubmit}>
            <input type='text' 
              placeholder='message' 
              name='message'
              maxLength="140"
              value={this.state.messages}
              onChange={this.newMessage} />
        </form>
        <button type="submit">Send</button>
      </div>
    )
  }
}

export default Form;
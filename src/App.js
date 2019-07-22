import React, { Component } from 'react';
import './App.css';
import logo from './images/xbox-logo-1159774.jpeg';

import Message from "./components/Message";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row App-header">
          <div className="col-md-4">
          </div>
          <div className="col-md-4">
            <img className="img img-fluid" src={logo} alt="Logo" style={{padding: "10px"}}/>
            <p>XBox Xpress Messaging</p>
          </div>
          <div className="col-md-4">
          </div>
        </div>
        <div className="chat-window">
          <div className='messages'>
              <Message message="HELLO!" author="Tyler" />
              <Message message="Hey sup" author="Swarna" user />
              <Message message="Just Testing" author="Tyler" />
              <Message message="Works great" author="Swarna" user />
              <Message message="Thats good" author="Tyler" />
              <Message message="Yup" author="Swarna" user />
          </div>
        </div>
        <div className="footer">
          <div className="row">
            <button className="col-md-4 btn btn-outline-secondary">option1</button>
            <button className="col-md-4 btn btn-outline-secondary">option2</button>
            <button className="col-md-4 btn btn-outline-secondary">option3</button>
          </div>
          <div className="Message-Box">
            <div className="input-group mb-3">
              <textarea className="form-control" placeholder="Type your message here..." aria-label="Type your message here" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

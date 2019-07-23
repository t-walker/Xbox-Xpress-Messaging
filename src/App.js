import React, { Component } from 'react';
import './App.css';

import Header from "./components/Header";
import Message from "./components/Message";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        
        <div className="row">
          <div className='col-md-12'>
            <div className="chat-window">
              <div className='messages' style={{padding: '10px'}}>
                  <Message message="HELLO!" author="Tyler" />
                  <Message message="Hey sup" author="Swarna" user />
                  <Message message="Just Testing" author="Tyler" />
                  <Message message="Works great" author="Swarna" user />
                  <Message message="Thats good" author="Tyler" />
                  <Message message="Yup" author="Swarna" user />
                  <Message message="HELLO!" author="Tyler" />
                  <Message message="Hey sup" author="Swarna" user />
                  <Message message="Just Testing" author="Tyler" />
                  <Message message="Works great" author="Swarna" user />
                  <Message message="Thats good" author="Tyler" />
                  <Message message="Yup" author="Swarna" user />
                  <Message message="HELLO!" author="Tyler" />
                  <Message message="Hey sup" author="Swarna" user />
                  <Message message="Just Testing" author="Tyler" />
                  <Message message="Works great" author="Swarna" user />
                  <Message message="Thats good" author="Tyler" />
                  <Message message="Yup" author="Swarna" user />
              </div>
            </div>
          </div>
        </div>
      
        <div className="row" style={{marginTop: '15px'}}>
          <div className="col-md-12">
            <button className="btn btn-outline-secondary mr-2">option1</button>
            <button className="btn btn-outline-secondary mr-2">option2</button>
            <button className="btn btn-outline-secondary">option3</button>
          </div>
        </div>

        <div className="relative-bottom row" style={{marginTop: '15px'}}>
          <div className="col-md-12">
            <div className="input-group">
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

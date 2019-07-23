import React, { Component } from 'react';
import './App.css';

import Header from "./components/Header";
import ChatWindow from "./components/ChatWindow";
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />

        <ChatWindow />
      
        <div className="row" style={{marginTop: '15px'}}>
          <div className="col-md-12">
            <button className="btn btn-outline-secondary mr-2 btn-color">option1</button>
            <button className="btn btn-outline-secondary mr-2 btn-color">option2</button>
            <button className="btn btn-outline-secondary btn-color">option3</button>
          </div>
        </div>

        <div className="relative-bottom row" style={{marginTop: '15px'}}>
          <div className="col-md-12">
            <div className="input-group">
              <textarea className="form-control" placeholder="Type your message here..." aria-label="Type your message here" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary btn-color" type="button">Send</button>
              </div>
            </div>
          </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    messages: state.messages
  }
}

const connectedApp = connect(
  mapStateToProps
)(App);

export default connectedApp;

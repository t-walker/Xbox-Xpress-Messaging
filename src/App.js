import React, { Component } from 'react';
import './App.css';

import Header from "./components/Header";
import ChatWindow from "./components/ChatWindow";
import { connect, Provider } from 'react-redux';
import { addMessage } from "./actions";
import store from "./store";

class App extends Component {
  state = {};
  
  render() {
    const {messages} = this.props;
    console.log(this.state);
    
    return (
      <Provider store={store}>
        <div className="container">
          <Header />

          <ChatWindow messages={messages} />
        
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
                <textarea className="form-control" placeholder="Type your message here..." value={this.state.stagedMessage} onChange={(e)=>this.setState({stagedMessage:e.target.value})} aria-label="Type your message here" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary btn-color" type="button" onClick={()=>store.dispatch(addMessage({message: this.state.stagedMessage, author: 'Tyler', user: true}))}>Send</button>
                </div>
              </div>
            </div>
            </div>
          </div>
        </Provider>
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

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p>XBox Xpress Messaging</p>
          {/* logo TBD from carolyn */}
        </div>
        <div className="chat-window">
          <p>Chat window</p>
          <div className="Message-Box">
            <p>This is a message box!!!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

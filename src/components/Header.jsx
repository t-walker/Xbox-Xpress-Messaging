import React from "react";

import logo from '../images/Xpress Messaging.png';

const Header = () => {
    return (
        <div className="App-header">
          <div className="row">
            <div className="col-md-2">
            </div>
            <div className="col-md-8">
              <img className="img img-fluid" src={logo} alt="Logo"/>
            </div>
            <div className="col-md-2">
            </div>
          </div>
        </div>
    )
}

export default Header;
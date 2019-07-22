import React from 'react';

const Message = ({message, author, user}) => {

    let messageString = "";

    if (user) {
        messageString = (
            <div style={{padding: 1}}>
                <p style={{textAlign: "right"}}>{message} <span style={{color: 'blue'}}>{author}</span></p>
            </div>
        );
        // messageString = (<p style="background-color: #FFFF00"></p>);
    }
    else {
        messageString = (<p style={{textAlign: "left"}}><span style={{color: 'red'}}>{author}</span> {message}</p>);
    }

    return messageString;
}

export default Message;


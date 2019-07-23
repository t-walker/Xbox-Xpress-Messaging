import React, { useEffect, useRef } from "react";

import Message from "./Message";

const ChatWindow = ({messages}) => {

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(scrollToBottom);

    return (
        <div className="row">
          <div className='col-md-12'>
            <div className="chat-window">
              <div className='messages' style={{padding: '10px'}}>
                {
                  messages.map(
                    message => (
                      <Message message={message.message} author={message.author} user={message.user} />
                    )
                  )
                }
              </div>
              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>
    )
}


export default ChatWindow;

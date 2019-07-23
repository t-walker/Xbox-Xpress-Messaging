import React, { useEffect, useRef } from "react";

import Message from "./Message";

const ChatWindow = () => {

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
              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>
    )
}

export default ChatWindow;

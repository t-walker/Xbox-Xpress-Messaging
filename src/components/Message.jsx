import React from 'react';

// const Message = ({message, author, user}) => {
//     return (
//         <div className='container'>
//             <div className="col-md-5">
//                 <div className='row'>
//                 <p style={{}}>{author}</p>
//             </div>
//             <div className='row'>
//                 <div style={{padding: '10px', background: 'red', float: 'right'}}>
//                     <p>{message}</p>
//                 </div>
//             </div>
//             </div>
//         </div>
//     );
// };

const Message = ({message, author, user}) => {

    let messageString = "";

    if (user) {
        messageString = (
                <div>
                    <p style={{padding: '0px', margin: '0px', textAlign: "right", color: 'blue'}}>{author}</p>
                    <p style={{textAlign: "right"}}>{message}</p>
                </div>
                );
    }
    else {
        messageString = (
                <div>
                    <p style={{padding: '0px', margin: '0px', textAlign: "left", color: 'red'}}>{author}</p>
                    <p style={{textAlign: "left"}}>{message}</p>
                </div>
                // <p style={{textAlign: "left"}}><span style={{color: 'red'}}>{author}</span> {message}</p>
                );
    }

    return messageString;
}

export default Message;


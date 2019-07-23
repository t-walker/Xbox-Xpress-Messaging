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
                <p style={{textAlign: "right"}}>{message} <span style={{color: 'blue'}}>{author}</span></p>
                );
    }
    else {
        messageString = (<p style={{textAlign: "left"}}><span style={{color: 'red'}}>{author}</span> {message}</p>);
    }

    return messageString;
}

export default Message;


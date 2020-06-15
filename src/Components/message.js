import React from 'react';

function Message(props) {
    return (
        <div key={props.index} >
            <label className="sender-id">{props.messageDetails.senderId}</label><br />
            <label className="message">{props.messageDetails.message}</label>
        </div>
    );
}

export default Message;
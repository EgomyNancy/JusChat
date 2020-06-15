import React from 'react';

class SendMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messageTyped: ""
        };
    }
    handleChanges = (event) => {
        this.setState({ messageTyped: event.target.value });
    }
    onClick = (event) => {
        if (this.state.messageTyped) {
            let messageDetails = "";
            if (event.target.id === "senderMessagebtn") {
                messageDetails = { senderId: this.props.sender, message: this.state.messageTyped };
            }
            else if (event.target.id === "receiversMessagebtn") {
                messageDetails = { senderId: this.props.receiver, message: this.state.messageTyped };
            }
            this.props.addMessage(messageDetails);
            this.setState({ messageTyped: "" });
        }
    }
    render() {
        return (
            <div className="send-message-text-area">
                <button className="senders-send-button" id="senderMessagebtn" type="button" onClick={this.onClick}>{this.props.sender}</button>
                <input
                    className="type-message-area"
                    onChange={this.handleChanges}
                    placeholder="Type your message here.. and select the sender's name.."
                    value={this.state.messageTyped}
                    type="test"></input>
                <button className="receivers-send-button" id="receiversMessagebtn" type="button" onClick={this.onClick}>{this.props.receiver}</button>
            </div>
        );
    }
}

export default SendMessage;
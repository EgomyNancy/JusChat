import React from 'react';
import Message from './message';
import SendMessage from './sendMessage';

class ChatPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: this.props.contactList,
            sender: this.props.userName,
            receiver: "",
            showMessageArea: false,
            imgSource: "",
            messagesList: []
        };
    }

    handleChange = (event) => {
        if (event.target.value !== "Select Contact") {
            let imgSource = "";
            this.state.contactList.map((contact) => { if (contact.value === event.target.value) { imgSource = contact.source; } return contact; });
            this.setState({ messagesList: [], receiver: event.target.value, imgSource: imgSource, showMessageArea: true });
        }
    }
    addMessage = (messageDetails) => {
        const messagesList = this.state.messagesList.push(messageDetails);
        this.setState({ MessageList: messagesList });
    }
    render() {
        const { receiver, contactList, sender, showMessageArea, imgSource, messagesList } = this.state;
        return (
            <div className="chat-page">
                {showMessageArea ? <div className="message-window">
                    <div className="message-list">
                        {messagesList.map((messageDetails, index) => {
                            return (
                                <Message key={index} messageDetails={messageDetails} />
                            );
                        })}
                    </div>
                    <SendMessage addMessage={this.addMessage} sender={sender} receiver={receiver} />
                </div> : ""}
                <div className="chatters-window">
                    <div className="select-contact-text">Hi {sender}! <br />Select a contact to chat with..</div>
                    <div className="contact-list">
                        <select className="contact-list" value={receiver} placeholder="Select Contact" onChange={this.handleChange}>
                            {contactList.map((user) => {
                                return <option key={user.key} value={user.value}>{user.value}</option>
                            })}
                        </select>
                    </div>
                    {receiver ?
                        <div className="profile">
                            <img
                                height="300px"
                                width="200px"
                                alt="conactimg"
                                src={imgSource}
                                onClick={this.onClick}
                            />
                        </div> : ""}
                </div>
            </div>
        );
    }
}

export default ChatPage;
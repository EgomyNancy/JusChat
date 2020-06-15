import React from 'react';
import ChatPage from './chatPage';

class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedUser: "",
            userName: "",
            usersList: [{ key: "Select Contact", value: "Select Contact" }, { id: "harry", key: "Harry Potter", value: "Harry Potter", source: "/profiles/Harry.jpg" }, { id: "hermione", key: "Hermione Granger", value: "Hermione Granger", source: "/profiles/Hermione.jpg" }, { id: "ron", key: "Ron Weasley", value: "Ron Weasley", source: "/profiles/Ron.jpg" }, { id: "hagrid", key: "Rubeus Hagrid", value: "Rubeus Hagrid", source: "/profiles/Hagrid.jpg" }, { id: "dumble", key: "Aberforth Dumbledore", value: "Aberforth Dumbledore", source: "/profiles/Dumbledore.jpg" }, { id: "snape", key: "Severus Snape", value: "Severus Snape", source: "/profiles/Snape.jpg" }, { id: "dobby", key: "Dobby", value: "Dobby", source: "/profiles/Dobby.jpg" }],
            contactList: [],
            imgSource: ""
        };
    }

    handleChange = (event) => {
        if (event.target.value !== "Select Contact") {
            const contactList = this.state.usersList.filter((user) => {
                return user.value !== event.target.value;
            });
            let imgSource = "";
            this.state.usersList.map((user) => { if (user.value === event.target.value) { imgSource = user.source; } return user; });
            this.setState({ imgSource: imgSource, userName: event.target.value, selectedUser: event.target.value, contactList: contactList });
        }
        else {
            this.setState({ userName: "", selectedUser: event.target.value });
        }
    }
    onLogout = (event) => {
        this.setState({ userName: "",  selectedUser: "Select Contact" });
    }
    render() {
        const { userName, selectedUser, usersList, contactList, imgSource } = this.state;
        return (
            <div className="App-header">
                <div className="App-title">JusCHAT</div>
                {userName ? <div>
                    <div onClick={this.onLogout}>
                        <img className="user-image" alt="userimg" height="40px" width="40px" src={imgSource} onClick={this.onClick} />
                        <label className="logout-user">Logout</label>
                    </div>
                    <ChatPage contactList={contactList} userName={userName} />
                </div> :
                    <div>
                        <div className="login-user">Login as..</div>
                        <div className="user-list">
                            <select className="user-dropdown" value={selectedUser} placeholder="Select User" onChange={this.handleChange}>
                                {usersList.map((user) => {
                                    return <option key={user.key} value={user.value}>{user.value}</option>
                                })}
                            </select>
                        </div>
                    </div>}
            </div>
        );
    }
}


export default WelcomePage;
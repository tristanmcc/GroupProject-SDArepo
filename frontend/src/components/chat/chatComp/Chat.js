import React, { Component} from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import Style from "../../css/chat.css";
import UserApi from '../../api/UserApi';
import Forum from "./Forum";


//Media
import CourseGraphic from "../../images/Icons/Light_bulb.png";
import Calender from "../../images/Icons/clock_icon.png";
import Students from "../../images/Icons/Bag_icon.png";
import chatIcon from "../../images/Icons/paper_airplane.png";
import assignmentIcon from "../../images/Icons/NoteBook_icon.png";
import videoIcon from "../../images/Icons/Play_button.png";
import apple from "../../images/Icons/apple.png";

const URL = 'ws://localhost:3030'

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      messages: [],
    }
    this.userName = this.userName.bind(this);
  }
 

  userName() {
    UserApi.getCurrentUser()
      .then(results  => this.setState({ name: results.data.name }));
      
  }


  ws = new WebSocket(URL)

  componentDidMount() {    
    this.userName();
    //console.log(this.state);
    this.ws.onopen = () => {
    }
  

    this.ws.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(evt.data)
      this.addMessage(message)
    }

    this.ws.onclose = () => {
      // automatically try to reconnect on connection loss
      this.setState({
        ws: new WebSocket(URL),
      })
    }
      }
      
    

  addMessage = message =>
    this.setState(state => ({ messages: [message, ...state.messages] }))



  submitMessage = messageString => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = { name: this.state.name, message: messageString }
    this.ws.send(JSON.stringify(message))
    this.addMessage(message)
  }

  

  render() {
    return (
      <div>
        <div className="chat-banner">
            Communication
            </div>
            <div className="chat-page-row">
            <div className="chat-page-column">
      <div className="forumCard"><Forum/></div>
      </div>
      <div className="chat-page-column">
        <div className="chatbox">
        <div>
        {this.state.messages.map((message, index) =>
          <ChatMessage
            key={index}
            message={message.message}
            name={message.name}
          />,
        )}
        </div>
        <label htmlFor="name">
          Name:&nbsp; 
          {this.state.name}
         {/*} <input
            type="text"
            id={'name'}
            placeholder={'Enter your name...'}
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
        />*/} 
        </label>
        <ChatInput
          ws={this.ws}
          onSubmitMessage={messageString => this.submitMessage(messageString)}
        />
      </div>
      </div>
      </div>
      </div>
    )
  }
}

export default Chat

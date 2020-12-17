import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Icon from "@material-ui/core/Icon";
import Picker from 'emoji-picker-react';
import ChatEmoji from './/ChatEmoji'

class ChatInput extends Component {
  static propTypes = {
    onSubmitMessage: PropTypes.func.isRequired,
  }
  state = {
    message: '',
  }

  

  render() {
    return (
      <div >
      <form
        action=".."
        onSubmit={e => {
          e.preventDefault()
          this.props.onSubmitMessage(this.state.message)
          this.setState({ message: '' })
        }}
      >
        <h5 className="chat-title" >Send a message</h5>
        < input autoFocus
          type="text"
          placeholder={'Enter message...'}
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })}
        /> 
        <span >
        {/* <input className="chat-submit" type="submit" value={'Send'} /> <Icon className="chat-submit" >send</Icon> </span> */}
        <button className="chat-submit"  > <Icon className = "chat-submit-icon"> send</Icon> </button> 
        </span>
          </form>
         {/*  <div style={{ color: "red" }}>{errors}</div>
        {this.state.showEmojis ? (
          <span style={styles.emojiPicker} ref={el => (this.emojiPicker = el)}>
            <Picker
              onSelect={this.addEmoji}
              emojiTooltip={true}
              title="weChat"
            />
          </span>
        ) : (
          <p style={styles.getEmojiButton} onClick={this.showEmojis}>
            {String.fromCodePoint(0x1f60a)}
          </p>
        )} */}
        </div>
      
    )
  }
}

export default ChatInput

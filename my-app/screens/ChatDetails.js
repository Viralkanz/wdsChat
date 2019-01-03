import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat'
 
class ChatDetails extends Component {
  state = {
    messages: [],
  }
 
  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }
 
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }
 
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        maxInputLength={messages => this.maxInputLength(200)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}

export default ChatDetails;
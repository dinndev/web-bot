import React from 'react'
import MessageInputField from './MessageInputField'


class MessageBubble extends React.Component<any> {

    state = {
        action: this.props.action,
        text: this.props.text
    }

    message() {
        const { action } = this.state

        switch (action) {
            case "text-input":
                return <MessageInputField type="text" messagesController={this.props.messagesController} />
            default:
                return (
                    <div className="chatpack__message_bubble shadow-md my-2 rounded-lg">
                        {this.state.text}
                    </div >
                )
        }
    }

    render() {
        return this.message()
    }
}


export default MessageBubble

interface Props {
    text?: string
    action?: string
    messageStyles?: any
}

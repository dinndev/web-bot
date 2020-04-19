import React from 'react'
import MessageInputField from './MessageInputField'


class MessageBubble extends React.Component<any> {

    state = {
        type: this.props.type,
        text: this.props.text
    }

    message() {
        const { type } = this.state

        switch (type) {
            case "text":
                return (
                    <div className="chatpack__message_bubble shadow-md my-2 rounded-lg">
                        {this.state.text}
                    </div >
                )
            default:
                return ""
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

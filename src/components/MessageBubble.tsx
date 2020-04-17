import React from 'react'
import MessageInputField from './MessageInputField'


class MessageBubble extends React.Component<Props> {

    state = {
        action: this.props.action,
        text: this.props.text
    }

    componentDidMount() {

    }

    message() {
        const { action } = this.state


        switch (action) {
            case "text-input":
                return <MessageInputField type="text" />
            default:
                return (
                    <div className="chatpack__message_bubble shadow-md my-2 rounded-lg">
                        {this.props.text}
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

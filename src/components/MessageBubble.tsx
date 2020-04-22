import React from 'react'

class MessageBubble extends React.Component<any> {

    state = {
        type: this.props.type,
        text: this.props.text,
        owner: this.props.owner
    }

    message() {
        const { type, owner } = this.state

        switch (type) {
            case "text":
                return (
                    <div className={`chatpack__message_bubble ${owner} shadow-md my-2 rounded-lg`}>
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

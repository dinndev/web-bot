
import React from 'react'
import MessageBubble from './MessageBubble'

const Messages = (props: any) => {
    let messages = props.messages
    let messageStyles = props.bot_attributes.messageStyles
    let result: any = []
    for (let message of messages) {
        result.push(<MessageBubble key={messages.indexOf(message)} {...message} messageStyles={messageStyles} />)
    }

    return (
        <div className="chatpack__messages">
            {result}
        </div>
    )
}

export default Messages

import React from 'react'
import MessageBubble from './MessageBubble'
import { returnError } from '../utils'

const Messages = (props: any) => {

    let messages = props.messages.all
    let messageStyles = props.botAttributes.messageStyles
    let result: any = []
    for (let message of messages) {
        result.push(<MessageBubble key={messages.indexOf(message)} addMessage={props.addMessage} {...message} messagesController={props.messages} messageStyles={messageStyles} />)
    }

    return (
        <div className="chatpack__messages">
            {result}
        </div>
    )
}

export default Messages
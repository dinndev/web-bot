import React from 'react'
import Header from './Header'
import Messages from './Messages'
import MessagesAction from '../actions/messages'
import MessageInputField from './MessageInputField'

const sampleProps = {
    messages: [
        {
            text: "Hello, Goodmorning!",
            type: "text"
        },
        {
            text: "To start your application. We need to have your name.",
            type: "text"
        }
    ],
    botAttributes: {
        header: {
            title: "Chatpack",
            logo: "https://media-exp1.licdn.com/dms/image/C510BAQH-MR5_1PDQBA/company-logo_200_200/0?e=1595462400&v=beta&t=aMMvSAGBzv-vLIJNfVLV8SwTADKeAWG6ZunXJlNjHsI"
        },
        messageStyles: {

        }
    }
}

class Chatpack extends React.Component<any> {

    messages: MessagesAction
    state: State

    constructor(props: any) {
        super(props)

        this.state = {
            messages: sampleProps.messages,
            botAttributes: sampleProps.botAttributes,
            hideInput: false
        }

        this.messages = new MessagesAction({ addMessage: this.addMessage, messages: sampleProps.messages })
    }

    public addMessage = (arg: any[]) => {
        console.log(arg)
        this.setState({
            messages: arg,
            hideInput: true
        })
    }

    render() {
        return (
            <div className="chatpack__container h-screen w-full" style={this.props.styles}>
                <Header {...this.state.botAttributes.header} />
                <Messages messages={this.messages.all} botAttributes={this.state.botAttributes} />
                <MessageInputField type="text" messages={this.messages} hidden={this.state.hideInput} />
            </div>
        )
    }
}

export default Chatpack;

interface State {
    botAttributes: any
    messages: any[]
    hideInput: boolean
}
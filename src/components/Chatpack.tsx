import React from 'react'
import Header from './Header'
import Messages from './Messages'
import MessagesController from '../actions/messages'

const sampleProps = {
    messages: [
        {
            text: "Hello, Goodmorning! \nTo start your application. We need to have your name.",
        },
        {
            action: "text-input"
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


interface State {
    botAttributes: any
    messages: any[]
}

class Chatpack extends React.Component<any> {

    messages: any
    state: State

    constructor(props: any) {
        super(props)

        this.state = {
            messages: sampleProps.messages,
            botAttributes: sampleProps.botAttributes
        }

        this.messages = new MessagesController({ addMessage: this.addMessage, messages: sampleProps.messages })
    }

    public addMessage = (arg: any[]) => {
        // this.messages = arg
        this.setState({
            messages: arg
        })
        // console.log(arg)
    }

    render() {
        return (
            <div className="chatpack__container h-screen w-full" style={this.props.styles}>
                <Header {...this.state.botAttributes.header} />
                <Messages messages={this.messages} botAttributes={this.state.botAttributes} />
            </div>
        )
    }
}

export default Chatpack;


interface Props {
    styles: any
}

interface State {
}
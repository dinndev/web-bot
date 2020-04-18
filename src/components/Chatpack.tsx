import React from 'react'
import Header from './Header'
import Messages from './Messages'

const sampleProps = {
    messages: [
        {
            text: "Hello, Goodmorning! \nTo start your application. We need to have your name.",
        },
        {
            action: "text-input"
        }
    ],
    bot_attributes: {
        header: {
            title: "Chatpack",
            logo: "https://media-exp1.licdn.com/dms/image/C510BAQH-MR5_1PDQBA/company-logo_200_200/0?e=1595462400&v=beta&t=aMMvSAGBzv-vLIJNfVLV8SwTADKeAWG6ZunXJlNjHsI"
        },
        messageStyles: {

        }
    }
}


class Chatpack extends React.Component<Props> {

    state: State = {

    }

    render() {


        console.log(this.props)
        return (
            <div className="chatpack__container h-screen w-full" style={this.props.styles}>
                <Header {...sampleProps.bot_attributes.header} />
                <Messages {...sampleProps} />
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
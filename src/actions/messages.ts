class MessagesAction {

    all: any[]
    setMessage: any

    constructor(props: any) {
        this.all = props.messages
        this.setMessage = props.addMessage
    }


    adder(arg: any) {
        this.all.push(arg)
        this.setMessage(this.all)
    }

}

export default MessagesAction
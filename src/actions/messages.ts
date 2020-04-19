class MessagesController {

    all: any[]
    adder: any

    constructor(props: any) {
        this.all = props.messages
        this.adder = props.addMessage
    }


    addMessage(arg: any) {
        this.all.push({ text: arg })
        this.adder(this.all)
    }

}

export default MessagesController
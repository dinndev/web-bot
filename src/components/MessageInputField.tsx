import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';


class MessageInputField extends React.Component<any> {

    state = {
        editorState: EditorState.createEmpty(),
        placeholder: this.props.placeholder,
    }

    onChange = (editorState: any) => {
        this.setState({ editorState })
    }

    public handleSendUserInput(val: any) {
        let result: string = val.getPlainText('\u0001').trim()
        if (result)
            this.props.messages.adder({ text: result, type: "text" })
    }

    render() {

        if (this.props.hidden) return null

        return (
            <div className="chatpack__input__container flex shadow-md items-center">
                <div className="chatpack__input__field py-4 px-5">
                    <Editor editorState={this.state.editorState} placeholder={this.state.placeholder} onChange={this.onChange} />
                </div>

                <button className="chatpack__input__send ml-2 px-5 block" onClick={() => this.handleSendUserInput(this.state.editorState.getCurrentContent())}>
                    <FontAwesomeIcon icon="paper-plane" />
                </button>

            </div>
        )
    }
}



export default MessageInputField
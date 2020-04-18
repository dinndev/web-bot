import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Editor, EditorState } from 'draft-js';


class MessageInputField extends React.Component<any> {

    state = {
        editorState: EditorState.createEmpty()
    }

    onChange = (editorState: any) => {
        this.setState({ editorState })
    }

    handleSendUserInput(val: any) {
        if (!val) return
        console.log(val)
    }
    // className="chatpack__input__field py-4 px-5 text-center"
    render() {
        return (
            <div className="chatpack__input__container flex justify-center shadow-md">
                <div className="chatpack__input__field py-4 px-5 text-center">
                    <Editor editorState={this.state.editorState} onChange={this.onChange} />
                </div>

                {/* <textarea className="chatpack__input__field py-4 px-5 text-center" ></textarea> */}
                {/* // <input hidden type={type} value={inputValue} onChange={(e) => setInputValue(e.target.value)} /> */}
                <button className="chatpack__input__send px-5" onClick={() => this.handleSendUserInput(this.state.editorState)}>
                    <FontAwesomeIcon icon="paper-plane" />
                </button>

            </div>
        )
    }
}



export default MessageInputField
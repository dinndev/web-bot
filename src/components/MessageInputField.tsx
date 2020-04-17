import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const MessageInputField = (props: any) => {
    const type = props.type

    return (
        <div className="chatpack__input__container flex justify-center">
            <input autoFocus className="chatpack__input__field rounded-sm py-4 px-5 text-center rounded rounded-r-none shadow-md" type={type} />
            <button className="chatpack__input__send py-4 px-5 rounded-lg rounded-l-none shadow-md">
                <FontAwesomeIcon icon="paper-plane" />
            </button>
        </div>
    )
}

export default MessageInputField
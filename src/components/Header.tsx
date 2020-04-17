import React from 'react'


const Header = (props: any) => {

    return (
        <div className="chatpack__header flex items-center text-white font-bold text-2xl">
            <img src={props.logo} alt={props.title + " logo"} width="50" className="rounded-full mr-5" />
            <span className="chatpack__header__title">{props.title}</span>
        </div>
    )
}

export default Header
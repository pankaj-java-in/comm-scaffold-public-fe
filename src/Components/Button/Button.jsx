import React from 'react';
import "./Button.scss"

const Button = (props) => {
    const {type} = props;
    return (
        <div className={type === "request" ? "main-button req-btn" : "main-button"}>
            <div className='content'>
            Request a Demo 
            </div>
            <div className='arrow'>
            {type === "request" ? "" : "->"}
            </div>
        </div>
    )
}

export default Button;
import React from 'react';
import "./Button.scss"

const Button = (props) => {
    const {type, setUserDeatail, userDetail} = props;
    const reqDemo = () => {
    window.scrollTo({
        top: 4250,
        behavior: 'smooth'
      });
    };
    return (
        <div className={type === "request" ? "main-button req-btn" : "main-button"} onClick={() => reqDemo()}>
            <div className='content'>
            Request a Demo 
            </div>
            {/* <div className='arrow'>
            {type === "request" ? "" : "->"}
            </div> */}
        </div>
    )
}

export default Button;
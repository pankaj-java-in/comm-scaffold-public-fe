import React from 'react';
import "./Header.scss"
import Button from '../Button/Button';

const Header = () => {
    return (
        <div className="main-header">
            <div className='header'>
            <div className='header-logo'>
                <img className='logo' src={"https://stage-cs-attachment.s3.ap-south-1.amazonaws.com/public/Oodles+Scaffold+2.svg"} alt="Oodles"/>
            </div>
            <div>
                <Button/>
            </div>
            </div>
        </div>
    )
}

export default Header;
import React from 'react';
import "./Header.scss"
import Button from '../Button/Button';
import logo from '../../Utlis/Icons/linux.png'

const Header = () => {
    return (
        <div className="main-header">
            <div className='header'>
            <div>
                <img src={logo} alt="Oodles"/>
            </div>
            <div>
                <Button/>
            </div>
            </div>
        </div>
    )
}

export default Header;
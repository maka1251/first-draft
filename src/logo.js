import imageLogo from './assets/images/logo.png';
import './App.css';
import React, { useState } from 'react';

function Logo () {
    const [logoTitle] = useState('Raul');
    return(
    <div className="logo">
        <img src={imageLogo} alt=""/>
        <p className="raul">{logoTitle}</p>
    </div>)
}

export default Logo;
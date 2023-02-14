import './App.css';
import React, { useState } from 'react';
import NavItem from './navItem.js';

function Navigation () {
    const [nav] = useState(["ABOUT", "WHAT I DO", "WORK", "CONTACT"]);
    return(
    <div className="group-1">
        {nav.map(item => (
            <NavItem item={item}/>
        ))}
    </div>)
}

export default Navigation;
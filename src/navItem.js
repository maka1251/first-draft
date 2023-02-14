import './App.css';
import React from 'react';
import uuid from 'react-uuid';

function NavItem ({item}) {
    console.log(item.index)
    return(
            <a className="nav-item" href="#google" key={uuid()}>{item}</a>
        )
}

export default NavItem;
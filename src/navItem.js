import './App.css';
import React, { useState } from 'react';
import uuid from 'react-uuid';

function NavItem ({item}) {
    console.log(item.index)
    return(
            <a className="nav-item" href="#" key={uuid()}>{item}</a>
        )
}

export default NavItem;
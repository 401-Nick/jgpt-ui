import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NavBar = () => {
    return (
        <div className='navBar'>
            <ul>
                <li><a href='/'>Sound Scout</a></li>
                <li><a href='/about'>JGPT</a></li>
                <li><a href='https://github.com/401-Nick'>GitHub</a></li>
            </ul>
        </div>
    );
};

export default NavBar;

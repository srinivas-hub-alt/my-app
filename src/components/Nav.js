import React from 'react';
import logo from '../images/logo.png'

export default function Nav(){
    return(
        <div className='nav'>
            <img src={logo} alt='logo'/>
            <h3>my travel journal.</h3>
        </div>
    )
}
import React from 'react'
import './header.styles.scss'
import {Link} from 'react-router-dom'

const header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                LOGO
            </div>
            <div className='options'>
                <Link to='/shop' className='option'>SHOP</Link>
                <Link to='/contact' className='option'>CONTACT</Link>
                <Link to='sign-in' className='option' >SIGN OUT</Link>
                <Link to='/sign-in' className='option'>SIGN IN</Link>
            </div>
        </div>
    )
}


export default header
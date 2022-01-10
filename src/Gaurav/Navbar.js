import React, { useContext } from 'react'
import './Gaurav.css';
import { GiMoon } from 'react-icons/gi';
import { MyContext } from '../ContextProvider';

function Navbar1() {

    const ctx = useContext(MyContext)
    console.log(ctx)

    return (
        <div className='nav-bar-wrapper'>
            <div className='nav-bar-contents'>
                <div className='nav-link'>
                    About
                </div>
                <div className='nav-link'>
                    Home
                </div>
                <div className='nav-link'>
                    Contact us
                </div>
            </div>
            <span>
            </span>
            <div className='login-signup'>
                <div className='nav-end'>
                    Login
                </div>
                <div className='nav-end'>
                    Register
                </div>
                <div className='icon'>
                    <GiMoon size={20} onClick={ctx.changeTheme} />
                </div>
            </div>
        </div>
    )
}

export default Navbar1

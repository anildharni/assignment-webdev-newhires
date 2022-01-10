import React, { useContext } from 'react'
import './DivyaAlok.css';
import { GiMoon } from 'react-icons/gi';
import { MyContext } from '../ContextProvider';

function Navbar2() {

    const ctx = useContext(MyContext)
    console.log(ctx)

    return (
        <div className='nav-wrapper'>
            <div className='navcontents'>
                <div className='navlink'>
                    About
                </div>
                <div className='navlink'>
                    Home
                </div>
                <div className='navlink'>
                    Contact us
                </div>
            </div>
            <span>
            </span>
            <div className='logsignup'>
                <div className='react-icon'>
                    <GiMoon size={20} onClick={ctx.changeTheme} />
                </div>
                <div className='navend'>
                    Login
                </div>
                <div className='navend'>
                    Register
                </div>
            </div>
        </div>


        // <div className='nav-wrapper'>
        //     <div className='nav-contents'>
        //         <div className='navlink'>
        //             About
        //         </div>
        //         <div className='navlink'>
        //             Home
        //         </div>
        //         <div className='navlink'>
        //             Contact us
        //         </div>
        //     </div>
        //     <span>
        //     </span>
        //     <div className='logsignup'>
        //         <div className='navend'>
        //             Login
        //         </div>
        //         <div className='navend'>
        //             Register
        //         </div>
        //         <div className='react-icon'>
        //             <GiMoon size={20} onClick={ctx.changeTheme} />
        //         </div>
        //     </div>
        // </div>
    )
}

export default Navbar2

import React, { useState } from 'react';
import { Link } from "react-scroll";


const Header = () => {
    const [doActive, setActive] = useState(false);
    console.log(doActive);
    return (
        <>
            <nav className={`nav_main ${doActive ? 'active' : ''}`}>
                <div className='nav_main__burger'>
                    <div className='burger' onClick={() => setActive(!doActive)} >
                        <button className={`burger__inner ${doActive ? 'active' : ''}`}></button>
                    </div>
                </div>
                <div className='nav_main__menu'>

                </div>
            </nav>
            <header className='header_main'>
                <Link
                    activeClass="active"
                    to="main"
                    spy={true}
                    smooth={true}
                    duration={800}
                    className='header_main__button_invite btn'
                > Fly with us</Link>

            </header>
        </>


    );
}

export default Header;
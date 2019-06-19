import React, { useState } from 'react';



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
                <a href='#ticket' className='header_main__button_invite btn'>Fly with us</a>

            </header>
        </>


    );
}

export default Header;
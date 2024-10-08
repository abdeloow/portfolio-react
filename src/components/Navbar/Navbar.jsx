import React, { useState } from 'react';
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav';
import logo from '../../assets/images/logo_DPa.png';

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    const handleDownload = () => {
        window.open('https://1drv.ms/b/s!AlAnKjDA-wIE_G4_NBmOGzwzOhN8?e=XHX6Mz', '_blank');
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} handleDownload={handleDownload} />
            <nav className='nav-wrapper'>
                <div className='nav-content'>
                    <img className='logo' src={logo} alt="Logo" />
                    <ul>
                        <li>
                            <a className='menu-item' href="#hero">Home</a>
                        </li>
                        <li>
                            <a className='menu-item' href="#skills">Skills</a>
                        </li>
                        <li>
                            <a className='menu-item' href="#work-experience">Experience</a>
                        </li>
                        <li>
                            <a className='menu-item' href="#project-showcase">Project Showcase</a>
                        </li>
                        <li>
                            <a className='menu-item' href="#contact-me">Contact Me</a>
                        </li>
                        <button className='contact-btn' onClick={handleDownload}>
                            Download Resume
                        </button>
                    </ul>
                    <button className='menu-btn' onClick={toggleMenu}>
                        <span className={'material-symbols-outlined'}
                            style={{ fontSize: '1.8rem' }}>
                            {openMenu ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
}
export default Navbar;
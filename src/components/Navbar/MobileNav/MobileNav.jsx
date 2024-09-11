import './MobileNav.css'

function MobileNav({ isOpen, toggleMenu, handleDownload }) {
    return (
        <>
            <div className={`mobile-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div className='mobile-menu-container'>
                    <img className='logo' src='./assets/images/logo.svg' alt='' />
                    <ul>
                        <li>
                            <a className='menu-item' href="#hero" onClick={toggleMenu}>Home</a>
                        </li>
                        <li>
                            <a className='menu-item' href="#skills" onClick={toggleMenu}>Skills</a>
                        </li>
                        <li>
                            <a className='menu-item' href="#work-experience" onClick={toggleMenu}>Experience</a>
                        </li>
                        <li>
                            <a className='menu-item' href="#contact-me" onClick={toggleMenu}>Contact</a>
                        </li>
                        <li>
                            <button className='contact-btn' onClick={handleDownload}>
                                Hire Me
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default MobileNav;
import './MobileNav.css'

function MobileNav({isOpen, toggleMenu}) {
    return (
        <>
            <div className={`mobile-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div className='mobile-menu-container'>
                    <img className='logo' src='./assets/images/logo.svg' alt='' />
                    <ul>
                        <li>
                            <a className='menu-item'>Home</a>
                        </li>
                        <li>
                            <a className='menu-item'>Skills</a>
                        </li>
                        <li>
                            <a className='menu-item'>Experience</a>
                        </li>
                        <li>
                            <a className='menu-item'>Contact</a>
                        </li>
                        <button className='contact-btn' onClick={() => { }}>
                            Hire Me
                        </button>
                    </ul>
                </div>
            </div >
        </>
    )
}

export default MobileNav;
import ContactForm from './ContactForm/ContactForm';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import mail from '../../assets/images/mail.png';
import githubicon from '../../assets/images/github.png';

import './ContactMe.css'

function ContactMe() {
    return (
        <section className='contact-container'>
            <h5>Contact Me</h5>
            <div className='contact-content'>
                <div style={{ flex: 1 }}>
                    <ContactInfoCard iconUrl={mail} text={'dihbaouri@outlook.com'} />
                    <ContactInfoCard iconUrl={githubicon} text={'https://github.com/abdeloow'} />
                </div>
                <div style={{ flex: 1 }}><ContactForm /></div>
            </div>
        </section>
    )
}

export default ContactMe;
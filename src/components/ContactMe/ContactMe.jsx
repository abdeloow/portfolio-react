import ContactForm from './ContactForm/ContactForm';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import './ContactMe.css'

function ContactMe() {
    return (
        <section className='contact-container'>
            <h5>Contact Me</h5>
            <div className='contact-content'>
                <div style={{ flex: 1 }}>
                    <ContactInfoCard iconUrl={'./assets/images/mail.png'} text={'dihbaouri@outlook.com'} />
                    <ContactInfoCard iconUrl={'./assets/images/github.png'} text={'https://github.com/abdeloow'} />
                </div>
                <div style={{ flex: 1 }}><ContactForm /></div>
            </div>
        </section>
    )
}

export default ContactMe;
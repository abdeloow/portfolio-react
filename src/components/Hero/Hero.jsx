import './Hero.css'

function Hero() {
    return (
        <>
            <section className='hero-container'>
                <div className='hero-content'>
                    <h2>Building Digital Experiences That Inspire</h2>
                    <p>
                        Passionate Full-Stack Developer | Transforming Ideas into Seamless and
                        Visually Stunning Web Solutions
                    </p>
                </div>
                <div className='hero-img'>
                    <div>
                        <div className='tech-icon'>
                            <img src='./assets/images/c-sharp.png' alt='' />
                        </div>
                        <img src='./assets/images/p2.png' alt='' />
                    </div>
                    <div>
                        <div className='tech-icon'>
                            <img src='./assets/images/typescript.png' alt='' />
                        </div>
                        <div className='tech-icon'>
                            <img src='./assets/images/css-3.png' alt='' />
                        </div>
                        <div className='tech-icon'>
                            <img src='./assets/images/js.png' alt='' />
                        </div>
                        <div className='tech-icon'>
                            <img src='./assets/images/html.png' alt='' />
                        </div>
                        <div className='tech-icon'>
                            <img src='./assets/images/sql-server.png' alt='' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;
import './Hero.css'
import csharp from '../../assets/images/c-sharp.png';
import profile from '../../assets/images/p2.png';
import typescript from '../../assets/images/typescript.png';
import css3 from '../../assets/images/css-3.png';
import js from '../../assets/images/js.png';
import htmllang from '../../assets/images/html.png';
import sqlServer from '../../assets/images/sql-server.png';

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
                            <img src={csharp} alt='' />
                        </div>
                        <img src={profile} alt='' />
                    </div>
                    <div>
                        <div className='tech-icon'>
                            <img src={typescript} alt='' />
                        </div>
                        <div className='tech-icon'>
                            <img src={css3} alt='' />
                        </div>
                        <div className='tech-icon'>
                            <img src={js} alt='' />
                        </div>
                        <div className='tech-icon'>
                            <img src={htmllang} alt='' />
                        </div>
                        <div className='tech-icon'>
                            <img src={sqlServer} alt='' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;
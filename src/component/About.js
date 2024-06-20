import './Styles/about.css'
// import '../index.css'
import about from '../imgs/about.png'

function About() {
    return (
        <>

            <div className="row py-5 bg " id="about">
                <div className="col-6 col-lg-6 col-md-6 About-Image">
                    <img src={about} alt="About"></img>
                </div>
                <div className="col-6 col-lg-6 col-md-6  ">
                    <div className='text-container-about'>
                        <div className='text-item'>
                            <h3>*About Us: Shark Defence*</h3>
                            <p>Welcome to Shark Defence, your trusted partner in cyber security.
                                Our mission is to detect and protect against malicious URLs, </p>
                        </div>
                        <div className='text-item d-flex  align-items-start justify-content-start'>
                            <h3 >*What does Shark Defence specialize in?*</h3>
                            <p >
                                Shark Defence specializes in detecting and protecting against malicious URLs, ensuring the safety and security of digital environments
                                .</p>
                        </div>
                        <div className='text-item'>
                            <h3> *What services does Shark Defence offer?*</h3>
                            <p>

                                We offer a range of comprehensive services including:

                            </p>
                        </div>
                        <div className='text-item'>
                            <h3>*Threat Analysis Reports:*</h3>
                            <p>
                                Providing detailed reports on detected threats and their outcomes.

                            </p>
                        </div>
                        <div className='text-item'>
                            <h3> *Security Rules:*</h3>
                            <p>
                                Developing and implementing tailored security rules for added protection.


                            </p>
                        </div>
                        <div className='text-item'>
                            <h3>*What is Shark Defence committed to?*</h3>
                            <p>

                                At Shark Defence, we are committed to safeguarding digital assets using cutting-edge technology and expert analysis
                            </p>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default About
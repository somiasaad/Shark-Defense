import React from 'react'
import './services.css'

import IMG3 from '../../imgs/img3.jpg'

export default function Service1() {
    return (
        <div>


            <div className="text-container-service ">
                <div className="text bg container">
                    <p><span>Homepage/</span>Our community</p>
                    <h2>ScreenShot </h2>
                </div>
                <div className="text-content ">
                    <div className="container ">
                        <div className='Service-img'> <img className='' src={IMG3} /></div>
                        <h2>ScreenShot </h2>
                        <p>
                            The screenshot feature supports informed decision-making by providing additional context about the URL:
                            Instant Insight: Users can get an immediate sense of the webpage’s legitimacy and content quality at a glance. This visual context can help users decide whether to trust and proceed with the link.
                            Enhanced Understanding: Screenshots provide a clearer picture of what to expect from a webpage, which is especially useful for identifying misleading or deceptive URLs that may otherwise seem harmless.
                            User-Friendly and Convenient
                            Designed with user experience in mind, our screenshot feature is both intuitive and easy to use:
                            Seamless Integration: The screenshot is automatically generated and displayed within the detection system, requiring no additional effort from the user.
                            Clear and Accessible: Screenshots are presented in a straightforward manner, making it easy for users of all technical levels to understand and use the information.
                            By combining advanced detection techniques with a practical screenshot feature, our system not only enhances security but also provides peace of mind. Users can navigate the web with greater confidence, knowing they have an extra layer of protection against malicious URLs. This innovative feature empowers users
                            to make safer choices online by offering clear, visual evidence of the nature of the URLs they encounter.

                        </p>
                    </div>
                </div>

            </div>
        </div>)
}
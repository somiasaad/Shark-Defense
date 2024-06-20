import React from 'react'
import './services.css'

import IMG4 from '../../imgs/img4.jpg'

export default function Service1() {
    return (
        <div>


            <div className="text-container-service ">
                <div className="text bg container">
                    <p><span>Homepage/</span>Our community</p>
                    <h2>Our community </h2>
                </div>
                <div className="text-content ">
                    <div className="container ">
                        <div className='Service-img'> <img className='' src={IMG4} /></div>
                        <h2>Submit to technical team</h2>
                        <p>
                            The "Submit to Technical Team" feature empowers users to actively participate in enhancing their own security. By providing a straightforward mechanism for reporting suspicious URLs, users contribute to a more robust and responsive detection system.
                            Key Benefits
                            Enhanced User Security:
                            Quick Reporting: Users can swiftly report URLs they suspect to be malicious, enabling immediate action and reducing the time malicious content remains unchecked.
                            Expert Analysis: Reported URLs are reviewed by our technical team, ensuring that expert analysis is applied to potential threats, thereby increasing the accuracy of our detection system.
                            Improved Detection System:
                            Continuous Learning: User-submitted URLs provide valuable data that helps improve our detection algorithms. This crowdsourced information helps the system learn and adapt to new threats more effectively.
                            Database Expansion: Each submitted URL contributes to a growing database of known threats, enhancing the system's ability to detect and block malicious URLs in the future.
                            User Empowerment and Trust:
                            Active Participation: Users feel more secure knowing they have a direct line of communication with the technical team for addressing potential threats.
                            Transparency: Providing users with a means to report URLs fosters transparency and builds trust, as users see that their concerns are taken seriously and acted upon.
                        </p>
                    </div>
                </div>

            </div>
        </div>)
}
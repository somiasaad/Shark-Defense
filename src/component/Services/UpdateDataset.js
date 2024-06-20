import React from 'react'
import './services.css'

import IMG2 from '../../imgs/img2.jpg'

export default function Service1() {
    return (
        <div>


            <div className="text-container-service ">
                <div className="text bg container">
                    <p><span>Homepage/</span>Our community</p>
                    <h2>Domain Whois </h2>
                </div>
                <div className="text-content ">
                    <div className="container ">
                        <div className='Service-img'> <img className='' src={IMG2} /></div>
                        <h2>Domain Whois </h2>
                        <p>
                            The Domain WHOIS feature is designed to retrieve and display important information about the domain associated
                            with a URL. By accessing the WHOIS database, users can gain insights into the domain's registration details, ownership, and history, which are crucial for assessing the credibility and safety of a website.
                            Key Benefits
                            Enhanced Security Awareness:
                            Domain Ownership Information: Users can view the registered owner of the domain, the registration date,
                            and contact information. This helps in identifying potentially suspicious or anonymous registrations often associated with malicious activities.
                            Registration Details: The feature provides information on the domain's registration date and
                            expiration date, helping users spot newly created domains that might be used for short-term malicious campaigns
                        </p>
                    </div>
                </div>

            </div>
        </div>)
}
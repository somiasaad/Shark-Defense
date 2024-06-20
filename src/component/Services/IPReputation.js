import React from 'react'
import './services.css'

import IMG1 from '../../imgs/img1.jpg'

export default function Service1() {
    return (
        <div>


            <div className="text-container-service ">
                <div className="text bg container">
                    <p><span>Homepage/</span>Our community</p>
                    <h2>IP Reputation</h2>
                </div>
                <div className="text-content ">
                    <div className="container ">
                        <div className='Service-img'> <img className='' src={IMG1} /></div>
                        <h2>IP Reputation </h2>
                        <p>
                            The IP reputation feature is designed to assess and score the reliability of IP addresses linked to URLs.
                            By leveraging historical data and threat intelligence, this feature helps users determine the likelihood of a URL being malicious based on its IP address reputation.
                            Key Benefits
                            Improved Security Awareness:
                            Risk Assessment: Users receive a risk score or rating that reflects the trustworthiness of the IP address
                            behind a URL. This helps users make informed decisions about whether to proceed with visiting the website.
                            Proactive Protection: By identifying URLs associated with suspicious or previously reported IP addresses,
                            users can avoid potential threats before they interact with harmful content.
                            Enhanced Decision-Making:
                            Detailed Insights: The IP reputation feature provides users with detailed insights into why an IP address is
                            considered risky, such as its history of hosting malware, phishing sites, or being part of a botnet.


                        </p>
                    </div>
                </div>

            </div>
        </div>)
}
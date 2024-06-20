import React from 'react'
import './services.css'
import threat from '../../imgs/Threat.jpg'
export default function Service2() {
    return (
        <div>


            <div className="text-container-service ">
                <div className="text bg container">
                    <p><span>Homepage/</span>Elastic technology</p>
                    <h2>threat Analysis Report </h2>
                </div>
                <div className="text-content ">
                    <div className="container ">
                        <div className="Service-img "><img className='' src={threat} /></div>
                        <h2>threat Analysis Report </h2>
                        <p className='pser'>
                            The threat analysis report feature for detecting malicious URLs provides users with crucial insights
                            into the safety and integrity of the URLs they encounter. By leveraging advanced algorithms and threat
                            intelligence databases, this feature analyzes the URL for potential risks such as phishing, malware, and
                            other cyber threats. Users receive a detailed report outlining the findings, including the nature of the
                            threat, the level of risk, and recommended actions to mitigate potential harm. This proactive approach
                            empowers users to make informed
                            decisions, enhancing their online security and protecting their sensitive information from cyber attacks.
                        </p>
                    </div>
                </div>

            </div>
        </div>)
}
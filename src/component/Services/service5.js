import React from 'react'
import './services.css'
import service5 from '../../imgs/service5.jpeg'
export default function Service5() {
    return (
        <div>


            <div className="text-container-service ">
                <div className="text bg container">
                    <p><span>Homepage/</span>Phishing Simulator</p>
                    <h2>Phishing Simulator</h2>
                </div>
                <div className="text-content ">
                    <div className="container ">
                        <div className="Service-img "> <img className='phishing-img' src={service5} /></div>
                        <h2>Phishing Simulator</h2>
                        <p className='pser'>Phishing simulations are controlled experiments that mimic real-life phishing attacks without the malicious intent. These simulations are typically orchestrated by cybersecurity experts at shark eye to send emails or messages that resemble phishing attempts to the organization's staff. The goal is to see how employees react: whether they recognize the attempt as a phishing scam and report it, or if they fall for it by clicking on links, downloading attachments, or providing sensitive information.
                            Increased Awareness: Regular exposure to simulations heightens awareness among employees, making them more vigilant about the threats lurking in their inboxes.
                            Behavioral Change: By experiencing firsthand the tactics used by cybercriminals, employees are more likely to change their online behaviors to safeguard against attacks.
                            Risk Assessment: Organizations can assess the level of risk and the potential vulnerabilities within their workforce, allowing them to tailor further training to address these weaknesses.
                            Compliance and Reporting: Simulations can help reinforce the importance of compliance with security policies and procedures, including the correct reporting channels for suspected phishing attempts.
                            we provide Realistic Scenarios of actual phishing attacks in complexity and appearance and are designed in a way that they do not cause panic or harm.
                            Following our simulation, provide immediate feedback to participants, especially those who fell for the simulation, by offering constructive advice and educational resources.
                            Measure and Improve: Regularly analyze the outcomes of simulations to identify trends, areas for improvement, and the effectiveness of current training materials  </p>
                    </div>
                </div>

            </div>
        </div>)
}
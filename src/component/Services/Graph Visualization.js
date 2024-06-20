import React from 'react'
import './services.css'

import IMG4 from '../../imgs/img4.jpg'

export default function Service1() {
    return (
        <div>


            <div className="text-container-service ">
                <div className="text bg container">
                    <p><span>Homepage/</span>Our community</p>
                    <h2>Graph Visualization  </h2>
                </div>
                <div className="text-content ">
                    <div className="container ">
                        <div className='Service-img'> <img className='' src={IMG4} /></div>
                        <h2>Graph Visualization </h2>
                        <p>
                            The Graph Visualization feature is designed to help users visually explore and understand the intricate relationships and patterns associated with URLs. By presenting data in a graphical format, users can more easily identify suspicious connections and behaviors that might indicate malicious activity.

                            Key Benefits
                            Enhanced Threat Detection:

                            Visual Patterns and Anomalies: Users can quickly identify unusual patterns and connections that may signify malicious activity. For example, seeing a single IP address connected to numerous suspicious domains can indicate a potential threat.
                            Complex Relationships: The graphical representation helps users comprehend complex relationships between various entities, such as URLs, IP addresses, domains, and registrants, which can be difficult to grasp through text alone.
                            Improved Decision-Making:

                            Intuitive Understanding: Graphs make it easier for users to intuitively understand the data. This aids in making informed decisions about the safety of a URL based on its connections and history.
                            Highlighting Key Indicators: The visualization can highlight key indicators of risk, such as clusters of malicious domains or frequent associations with known bad actors, guiding users to make better security decisions.
                            User Empowerment and Confidence:

                            Interactive Exploration: Users can interact with the graph to explore different aspects of the data, such as zooming in on specific connections or filtering out noise, which helps them feel more in control of their security assessments.
                            Enhanced Awareness: By seeing the broader context of a URL’s connections, users gain a deeper understanding of potential threats, leading to increased vigilance and safer browsing habits.
                        </p>
                    </div>
                </div>

            </div>
        </div>)
}
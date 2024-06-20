import React from 'react'
import './services.css'
import service2 from '../../imgs/service2.jpeg'
export default function Service2() {
    return (
        <div>


            <div className="text-container-service ">
                <div className="text bg container">
                    <p><span>Homepage/</span>Elastic technology</p>
                    <h2>Security Rule</h2>
                </div>
                <div className="text-content ">
                    <div className="container ">
                        <div className="Service-img "><img className='' src={service2} /></div>
                        <h2>Security Rule </h2>
                        <p className='pser'> Elastic technology allows for the real-time monitoring of website logs, which includes everything from user access logs to error logs and system events. This capability enables website administrators to detect unusual patterns or anomalies that could indicate a security breach, such as repeated failed login attempts or unexpected spikes in traffic from a particular source.
                            Identifying and Mitigating Attacks: By analyzing the collected data, Elastic technology can help identify potential security threats, such as DDoS attacks, SQL injection, cross-site scripting (XSS), and more. The real-time nature of the technology means that these threats can be detected early, allowing for quick mitigation actions to be taken to protect the website and its data.
                            Comprehensive Log Management: Elastic technology simplifies log management by aggregating logs from various sources into a centralized platform. This not only aids in security analysis but also helps in troubleshooting and optimizing website performance. Logstash, in particular, can filter, parse, and transform logs, making it easier to identify relevant information.
                            Customizable Alerts: Through the integration of alerting tools, website administrators can set up custom alerts for specific patterns or events. This means being instantly notified of potential security incidents, enabling a swift response to mitigate any potential damage.
                            Monthly Reporting: Kibana's visualization tools play a crucial role in representing data in an accessible manner. Administrators can create dynamic dashboards that summarize the website's activities, including security incidents, user behavior, and system performance over the month. These dashboards can be used to generate comprehensive monthly reports, providing stakeholders with insights into trends, threats, and opportunities for improvement.
                        </p>
                    </div>
                </div>

            </div>
        </div>)
}
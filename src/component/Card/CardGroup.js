// import React from 'react';
// import Card from './Card';

// const CardGroup = () => {
//     return (
//         <div className="card-group">
//             <Card title="Card 1" description="This is the description for Card 1." />
//             <Card title="Card 2" description="This is the description for Card 2." />
//             <Card title="Card 3" description="This is the description for Card 3." />
//         </div>
//     );
// };

// export default CardGroup;
import React from 'react';
import Card from './Card';
import './Card.css'
import Card1 from '../../imgs/card1.jpg';
import Card2 from '../../imgs/card2.jpg';
import test3 from '../../imgs/Root-X Front.png';


const CardGroup = () => {
    return (
        <div className="card-group ">
            <Card
                title="Cyber-Pen"
                description=" Cyber-Pen is a dynamic news company focused on delivering the latest updates 
                in cybersecurity. Specializing in reporting on recent security vulnerabilities, breaches, 
                and cyber-attacks, Cyber-Pen keeps its audience informed about critical developments in the
                 digital security landscape. Beyond news dissemination, Cyber-Pen offers a comprehensive Security
                  Operations Center (SOC) service, providing real-time monitoring and defense against cyber threats. 
                  By combining timely news coverage with robust security services, Cyber-Pen ensures its readers 
                and clients are always a step ahead  cybersecurity."
                image={Card1}
            />
            <Card
                title="Digital Fortress"
                description=" Digital Fortress is a specialized company dedicated to digital forensics and incident 
                response. Focused on uncovering and addressing cyber incidents, Digital Fortress provides expert 
                analysis and solutions to help organizations recover from security breaches. Additionally, the company 
                excels in threat hunting, proactively identifying and mitigating potential threats before they can cause 
                harm. With a team of skilled professionals and cutting-edge technology, Digital Fortress ensures 
                comprehensive
                 protection and swift response to cyber threats, safeguarding the digital assets of its clients."
                image={Card2}
            />
            <Card
                title="Root-X"
                description=" Root-X is a forward-thinking company dedicated to enhancing people's security 
                awareness in an increasingly digital world. With a commitment to educating individuals and 
                organizations, Root-X operates an informative blog that covers the latest trends, tips, 
                and best practices in cybersecurity. In addition to its educational efforts, Root-X offers 
                a range of security services designed to protect against cyber threats, including penetration testing, 
                vulnerability scanning, and more. By combining knowledge dissemination with practical security solutions, 
                Root-X empowers its clients to navigate the digital landscape securely and confidently."
                image={test3}></Card>
        </div>
    );
};

export default CardGroup;
// import React from 'react';

// const Card = ({ title, description }) => {
//     return (
//         <div className="card">
//             <h2>{title}</h2>
//             <p>{description}</p>
//         </div>
//     );
// };

// export default Card;


import React from 'react';

const Card = ({ title, description, image }) => {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Card;
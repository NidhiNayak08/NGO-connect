// import React from 'react';
// import Details from './pages/Details';


// // const firstNgo ={
// //     img:"public/images/animal.JPG",
// //     title:"Smile Foundation",
// //     info : `Established in 2002, Smile Foundation is an Indian development organization, impacting the lives of over 15 lakh children and their families every year. We have more than 400 projects on education,
// //     healthcare, livelihood, and women empowerment in over 2,000 remote villages and urban slums across 25 states of India.`,
// // }

// export default function Depthdetails(props) {
//   return (
//   <div>
//     <h1>{props.title}</h1>
//     <p>{props.info}</p>
//   </div>

//   );
// };

// import React from 'react';
// import './deptdetails.css'; // Import the CSS file for the component

// export default function Depthdetails(props) {
//   return (
//     <div className="depth-details-box">
//       <h1>{props.title}</h1>
//       <p>{props.info}</p>
//     </div>
//   );
// };

import React from 'react';
import './deptdetails.css'; // Import the CSS file for the component

export default function Depthdetails(props) {
    return (
        <div className="depth-details-container">
            <div className="depth-details-card">
                <img src={props.img} alt={props.title} className="card-image" />
                <div className="card-content">
                    <h1>{props.title}</h1>
                    <p>{props.info}</p>
                </div>
            </div>
        </div>
    );
};

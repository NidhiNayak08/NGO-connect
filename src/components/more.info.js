import React from "react";
import "./Moreinfo.css"; // Import the CSS file for the component

function Moreinfo(props) {
  return (
    <div className="more-info-container">
      <img src={props.imageSrc} alt={props.name} className="info-image" />
      <div className="info-content">
        <h1>{props.name}</h1>
        <p>{props.info}</p>
        <br></br>
        <p>{props.info}</p>
      </div>
    </div>
  );
}

export default Moreinfo;

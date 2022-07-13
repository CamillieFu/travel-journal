import React from "react";
import '../css/Card.css';

export default function Card(props) {
  return(
    <div className="card">
      <div className="card--contents">
        <img
          src={props.img}
          className="card--image"
          alt="travel destination"
        />
        <div className="card--text">
          <div className="card--maps">
            <h3>{props.location}</h3>
            <a href={`${props.googleMapsLink}`}>View on google maps</a>
          </div>
          <h1>{props.destination}</h1>
          <p>{props.date}</p>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

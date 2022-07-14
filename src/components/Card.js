import React from "react";
import '../css/Card.css';

export default function Card(props) {
  return(
    <>
    <div className="card">
      <div className="card--contents">
        <img
          src={props.img}
          className="card--image"
          alt="travel destination"
        />
        <div className="card--text">
          <div className="card--maps">
            <h3 className="card--location">{props.location.toUpperCase()}</h3>
            <a href={`${props.googleMapsLink}`} className="card--map-link">View on google maps</a>
          </div>
          <h1 className="card--destination">{props.destination}</h1>
          <p className="card--date">{props.date}</p>
          <p className="card--description">{props.description}</p>
        </div>
      </div>
    </div>
    <div className="card--border"></div>
    </>
  )
}

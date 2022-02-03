import React from "react"

export default function Card(props) {
  return (
    <div className="card-container">
      <div className="card-image-container"><img className="card-picture" src={`/images/${props.item.img}`} alt={`${props.item.location}`}/></div>
      <div className="card-content-container">
        <div className="card-location-sec">
          <h4 className="location-name"><span className="location-icon"></span>{props.item.location}</h4>
          <a className="location-link" href={`${props.item.mapLink}`}>View on Google Map</a>
        </div>
        <h1 className="card-title">{props.item.title}</h1>
        <p className="card-date">{props.item.startDate} - {props.item.endDate}</p>
        <p className="card-description">{props.item.description}</p>
      </div>
    </div>
  )
}

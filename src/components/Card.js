import React from 'react';
import ping from '../images/ping.png';
export default function Card(props){
    console.log('prop values'+props);
    return(
        <div className='card'>
            
            
            <img src={props.imageUrl} alt='location landscape'/>
            <div className='card--details'>
                <p><img src={ping} alt='location pin'/>{props.location.toUpperCase()} <span className='map--location'><a href={props.googleMapsUrl}>View on Google Maps</a></span></p>
                <h2>{props.title}</h2>
                <h3>{props.startDate} - {props.endDate}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
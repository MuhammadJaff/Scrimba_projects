import React from 'react'
import {TiLocation} from 'react-icons/ti'

const Cards = ({title,location,googleMapsUrl,startDate,endDate,description,imageUrl,id}) => {
  return (
    <div key={id} className="card_item">

        <img className='image_card' src={imageUrl} alt={title} />

        <div>
          <div className='mini_card'>
            <h5 className='locate_country'><TiLocation className='location_icon'/>{location}</h5>
            <a target="_blank" className='view_maps' href={googleMapsUrl}>View on Google Maps</a>
          </div>
          <h2 className='place_name'>{title}</h2>
          <h5>{startDate} - {endDate}</h5>
          <p>{description}</p>
        </div>
    </div>
  )
}

export default Cards
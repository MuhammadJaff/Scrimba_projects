import React from 'react'
import Data from './Data'

const Footer = () => {
    
    return(
        <div className="container_foot">
           {Data.map(({image,star,rating,sold,country,quote,buy,index,openSpot,location})=>

            <div key={index} className="footer_item">
                {openSpot === 0 ? <h5 className='badge'>Sold out</h5> : 
                <h5 className='badge'>{location}</h5>}
                <img src={image} alt="" />
                <p className='text_img'>
                <img className='star' src={star} alt="rating"/>{rating}<span className='rating_sold'>({sold})*{country}</span>
                </p>
                <small className='qoute'>{quote}</small><br />
                <small className='price'><b>{buy}</b>/person</small>
            </div>
    
        )}
        </div>
    ) 

}

export default Footer
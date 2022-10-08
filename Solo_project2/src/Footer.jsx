import React from 'react'
import Data from './Data'

const Footer = () => {

    const data = [...Data]
    
    return(
        <div className="container_foot">
           {data.map(({image,star,rating,sold,country,quote,buy,index})=>
     
            <div key={index} >
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
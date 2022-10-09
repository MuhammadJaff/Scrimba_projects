import React from 'react'
import {GoGlobe} from 'react-icons/go'

const Header = () => {
  return (
    <div className='header_container'>   
        <GoGlobe className='earth_logo'/>
        <p className='travel_text'>my travel journal.</p> 
    </div>
  )
}

export default Header
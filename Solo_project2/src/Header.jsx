import React from 'react'
import logo from './images/airbnb 1.png'

const Header = () => {
  return (
    <div className='logo_border'>
        <img src={logo} alt="logo" className='logo'/>
    </div>
  )
}

export default Header
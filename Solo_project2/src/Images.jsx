import React from 'react'
import all from './images/allOfIt.png'

const Images = () => {
  return (
    <>
     <div className='imgConti'>
        <img className='bigImage' src={all} alt="images" />
     </div>
      <div className='texts'>
          <h1 className='head'>Online Experiences</h1>
          <p className='ptext'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
          </p>
      </div>
     </>
 
  )
}

export default Images
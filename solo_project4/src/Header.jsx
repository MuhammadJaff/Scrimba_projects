import React from 'react'
import meme from './images/troll.png'

const Header = () => {
  return (
    <div className='header_line'>
        <div className="logo_part">
            <img className='troll_img' src={meme} alt="meme" />
            <h3 className='meme_generator'>Meme Generator</h3>
        </div>
        <div>
          <h5>React Course - Project 4</h5>
        </div>
    </div>
  )
}

export default Header
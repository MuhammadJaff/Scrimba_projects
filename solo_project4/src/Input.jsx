import React from 'react'
import {FcPicture} from 'react-icons/fc'

const Input = () => {
  return (
    <form className='input_line'>
        <div className='input_conti'>
            <input type="text" className='inputs'/>
            <input type="text" className='inputs'/>
        </div>
        <button>Get a new meme image <FcPicture className='pic'/></button>
    </form>
  )
}

export default Input
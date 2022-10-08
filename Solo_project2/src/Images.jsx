import React from 'react'
import first_1 from './images/image 28.png'
import second_1 from './images/image 30.png'
import second_2 from './images/image 26.png'
import third_1 from './images/image 27.png'
import third_2 from './images/image 29.png'
import fourth_1 from './images/image 22.png'
import fourth_2 from './images/image 23.png'
import fifth_1 from './images/image 25.png'
import fifth_2 from './images/image 24.png'


const Images = () => {
  return (
    <div className='images_container'>
        <div className="images_item1">
            <img src={first_1} alt="first_1" />
            {/* <img src={first_1} alt="f" /> */}
        </div>
        <div className="images_item2">
            <img src={second_1} alt="second_1" />
            <img src={second_2} alt="second_2" />
        </div>
        <div className="images_item3">
            <img src={third_1} className="third_1" alt="third_1" />
            <img src={third_2} alt="third_2" />
        </div>
        <div className="images_item4">
            <img src={fourth_1} alt="fourth_1" />
            <img src={fourth_2} alt="fourth_2" />
        </div>
        <div className="images_item5">
            <img src={fifth_1} alt="fifth_1" />
            <img src={fifth_2} alt="fifth_2" />
        </div>
    </div>
  )
}

export default Images
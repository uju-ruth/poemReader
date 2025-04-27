import React from 'react'
import image from "../images/image.png"
const Image = () => {
  return (
    <img src={image} alt="" className='rounded-full w-10 h-10 object-fit' />
  )
}

export default Image
import React, { useEffect, useState } from 'react'
import { data1 } from '../assets/data';

const Crousels2 = () => {
    const [activeImageIndex , setActiveImageIndex] = useState(0);

    const handlePreviousClick = () =>{
        setActiveImageIndex(!activeImageIndex ? data1.length -1 : activeImageIndex -1)
    }

    const handleNextClick = () =>{
        setActiveImageIndex((activeImageIndex + 1)% data1.length)
    }


    // autoplay 

    useEffect(()=>{
        const timer = setTimeout(()=>{
            handleNextClick();
        },3000)
        return ()=>{
            clearTimeout(timer)
        }
    },[activeImageIndex])


  return (
    <div className='crousel_container'>
     
        <button className='prev' onClick={handlePreviousClick}>Prev</button>
      {
        data1.map((item,idx)=>(
            <div className='card fade'>
                <img key={idx} className= {`slide__img ${activeImageIndex === idx ? "visible":"hidden"}`} src={item.img} alt="" />
                <div className='title'>{item.title}</div>
            </div>
        ))
      }
      <button className='next' onClick={handleNextClick}>Next</button>
    </div>
  )
}

export default Crousels2

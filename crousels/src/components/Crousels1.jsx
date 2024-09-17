import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { data } from '../assets/data';
const Crousels1 = () => {
  return (
   <section className='page carousel-1-page'>
     <Swiper 
        modules = {[Pagination,EffectCoverflow]}
       grabCursor
       centeredSlides
       slidesPerView={2}
       effect='coverflow'
       loop
       pagination = {{clickable:true}}
       coverflowEffect={{
        rotate:0,
        stretch:0,
        depth:100,
        modifier: 3,
        slideShadows:true,
       }}
    >

        { data?.map((item,idx)=>(

            <SwiperSlide key={idx} style={{
                background:`url(${item.img})`
            }}>
                <div>
                    <div>
                        <h2>{item.title}</h2>
                        <a>Explore</a>
                    </div>
                </div>
            </SwiperSlide>
        ))
            
        }

    </Swiper>
   </section>
  )
}

export default Crousels1

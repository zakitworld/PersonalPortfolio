import React from 'react'
import './testimonials.css'
import AVTR1 from '../../Assets/passport.png'
import AVTR2 from '../../Assets/me.png'
import AVTR3 from '../../Assets/passport.png'
import AVTR4 from '../../Assets/me.png'

import { Pagination, Navigation } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const data = [
  {
    avatar: AVTR1,
    name: 'Abdul Razak',
    review: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, optio corporis veniam esse id architecto tempora ut sequi maxime eveniet nesciunt aut reiciendis iusto atque numquam commodi? Soluta, dolor sunt?'
  },

  {
    avatar: AVTR2,
    name: 'Abdul Razak',
    review: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, optio corporis veniam esse id architecto tempora ut sequi maxime eveniet nesciunt aut reiciendis iusto atque numquam commodi? Soluta, dolor sunt?'
  },

  {
    avatar: AVTR3,
    name: 'Abdul Razak',
    review: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, optio corporis veniam esse id architecto tempora ut sequi maxime eveniet nesciunt aut reiciendis iusto atque numquam commodi? Soluta, dolor sunt?'
  },

  {
    avatar: AVTR4,
    name: 'Abdul Razak',
    review: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, optio corporis veniam esse id architecto tempora ut sequi maxime eveniet nesciunt aut reiciendis iusto atque numquam commodi? Soluta, dolor sunt?'
  },
]

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      modules={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable: true}}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
                <small className="client__review">
                {review}
                </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
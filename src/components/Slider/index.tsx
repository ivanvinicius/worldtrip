import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './styles.module.css'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface ISliderProps {
  content: Array<{
    id: string
    title: string
    subtitle: string
    img: string
  }>
}

export function Slider({ content }: ISliderProps) {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      slidesPerView={1}
      spaceBetween={1}
      navigation
      pagination
      cssMode
      className={styles.mySwiper}
    >
      {content.map((item) => (
        <SwiperSlide key={item.id}>{item.title}</SwiperSlide>
      ))}
    </Swiper>
  )
}

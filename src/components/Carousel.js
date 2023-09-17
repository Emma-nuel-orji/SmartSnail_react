import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';

import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img1 from '../assets/about/about.jpg';
import img2 from '../assets/about/about1.jpg';
import img3 from '../assets/about/about2.jpg';
import img4 from '../assets/about/about3.jpg';
import img5 from '../assets/about/about4.jpg';
import img6 from '../assets/about/about5.jpg';
import img7 from '../assets/about/about6.jpg';
import img8 from '../assets/about/about7.jpg';
import img9 from '../assets/about/about8.jpg';
import img10 from '../assets/about/about9.jpeg';
import img11 from '../assets/about/about12.jpg';
import img12 from '../assets/about/girl.jpg';

import Arrow from '../assets/Arrow.svg';

const Container = styled.div`
width: 25vw;
height: 70vh;

@media (max-width: 70em){
  height: 60vh;
  
}

@media (max-width: 64em){
  height: 50vh;
  width: 30vw;
}

@media (max-width: 48em){
  height: 50vh;
  width: 40vw;
}
@media (max-width: 30em){
  height: 45vh;
  width: 60vw;
}

.swiper{
    width: 100%;
    height: 100%;
}

.swiper-slide{
    background-color: ${props => props.theme.carouselColor};
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    img{
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
}

.swiper-button-next{
    color: ${props => props.theme.text};
    right: 0;
    top: 60%;
    width: 4rem;

    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }

  @media (max-width: 64em){
    width: 3rem;
  }

  @media (max-width: 30em){
    width: 2rem;
  }
}
.swiper-button-prev{
    color: ${props => props.theme.text};
    left: 0;
    top: 60%;
    width: 4rem;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }

    @media (max-width: 64em){
      width: 3rem;
    }
  
    @media (max-width: 30em){
      width: 2rem;
    }
}
`

const Carousel = () => {
  return (
    <Container>
      <Swiper
      autoplay={{
        delay:2000,
        disableOnInteraction:false,
      }}
      pagination={{
        type:'fraction',
      }}
      scrollbar={{
        draggable:true
      }}
      navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <Link to="https://smartsnailnft.onrender.com/">
        <SwiperSlide> <img src={img1} alt="Smart Snail." /> </SwiperSlide>
        </Link>
        
        <SwiperSlide> <img src={img2} alt="Smart Snail." /> </SwiperSlide>
        <SwiperSlide> <img src={img3} alt="Smart Snail." /> </SwiperSlide>
        <SwiperSlide> <img src={img4} alt="Smart Snail." /> </SwiperSlide>
        <SwiperSlide> <img src={img5} alt="Smart Snail." /> </SwiperSlide>
        <SwiperSlide> <img src={img6} alt="Smart Snail." /> </SwiperSlide>
        <SwiperSlide> <img src={img7} alt="Smart Snail." /> </SwiperSlide>
        <SwiperSlide> <img src={img8} alt="Smart Snail." /> </SwiperSlide>
        <SwiperSlide> <img src={img9} alt="Smart Snail." /> </SwiperSlide>
        <SwiperSlide> <img src={img10} alt="Smart Snail." /> </SwiperSlide>
        <SwiperSlide> <img src={img11} alt="Smart Snail." /> </SwiperSlide>
        <SwiperSlide> <img src={img12} alt="Smart Snail." /> </SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Carousel
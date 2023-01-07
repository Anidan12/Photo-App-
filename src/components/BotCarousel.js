import React from 'react'
import {Carousel} from 'react-bootstrap';
import green from "../assets/green.jpg";
import SCHWEITZz from "../assets/SCHWEITZz.jpg";
import klint from "../assets/klint.jpg";
import norge from "../assets/norge.jpg";


//A carousel shownn on the homepage incl. 4 slides - imported from Bootstrap 
export default function BotCarousel() {
  return (
    <div>
    <Carousel className="my-carousel">
      <Carousel.Item>
        <img
          className="d-block"
          src={SCHWEITZz}    
          alt="1 slide"
        />   
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={klint}  
          alt="2 slide"
        /> 
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={green}  
          alt="3 slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={norge}    
          alt="4 slide"
        />      
      </Carousel.Item>
    </Carousel>        
    </div>
  )
}

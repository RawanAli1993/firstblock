import React, {useState, useEffect} from "react";
import Carousel from 'react-bootstrap/Carousel';
import PopupForm from "./calculator";

const images = [
    {
        id: 1,
     
        image: require('/home/rawan/Desktop/frontend/Freenights/firstblock/src/images/IMG-20240327-WA0009.jpg'),
       
    },
    { id: 2,
   
        image: require('/home/rawan/Desktop/frontend/Freenights/firstblock/src/images/IMG-20240327-WA0021.jpg'),
     
   
    },
    { id: 3,
    
        image: require('/home/rawan/Desktop/frontend/Freenights/firstblock/src/images/IMG-20240327-WA0042.jpg'),
    }

];
const Hero = () => {

    return(
        <section id="home" className='hero-block'>

        
        <Carousel >
            {images.map(images => {return(
        
           
              <Carousel.Item key={images.id}>
               <div className="image-container">
     
                <img className="carousel-image"
                  src={images.image} 
                  alt={"slide" + images.id}
                 /> 
                 <Carousel.Caption >
                 <PopupForm/>
               
               </Carousel.Caption>
               </div>
              </Carousel.Item>   
                   

             
              )} )}
             
            </Carousel>
            
            


          
            </section>
            )
       
   
};

export default Hero;








      
 



 
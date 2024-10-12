import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

import image1 from './Images/1.jpg';
import image2 from './Images/2.jpg';
import image3 from './Images/3.jpg';
import image4 from './Images/4.jpg';
import image5 from './Images/5.jpg';
import image6 from './Images/6.jpg';
import image7 from './Images/7.jpg';
import image8 from './Images/8.jpg';
import image9 from './Images/9.jpg';
import image10 from './Images/10.jpg';
import image11 from './Images/11.jpg';
import image12 from './Images/12.jpg';
import image13 from './Images/13.jpg';
import image14 from './Images/14.jpg';
import image15 from './Images/15.jpg';
import image16 from './Images/16.jpg';
import image17 from './Images/17.jpg';
import image18 from './Images/18.jpg';
import image19 from './Images/19.jpg';
import image20 from './Images/20.jpg';
import image21 from './Images/21.webp';
import image22 from './Images/22.jpg';

const images = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12,
  image13, image14, image15, image16, image17, image18, image19, image20, image21, image22
];

function App() {
  // Defina a data alvo para 12 de junho de 2024 às 23:25
  const targetDate = new Date('2024-06-12T23:25:00');
  const [timeDiff, setTimeDiff] = useState({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      
      // Cálculo de diferença entre meses e anos
      let years = now.getFullYear() - targetDate.getFullYear();
      let months = now.getMonth() - targetDate.getMonth() + years * 12;

      // Cálculo da diferença de tempo restante (dias, horas, minutos, segundos)
      let diff = now - new Date(targetDate.getFullYear(), targetDate.getMonth() + months, targetDate.getDate(), 23, 25);
      if (diff < 0) {
        months -= 1;
        diff = now - new Date(targetDate.getFullYear(), targetDate.getMonth() + months, targetDate.getDate(), 23, 25);
      }

      const seconds = Math.floor((diff / 1000) % 60);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      setTimeDiff({ months, days, hours, minutes, seconds });
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className="App">
      <div className="Picture">
        <Carousel>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image}
                alt={`Slide ${index + 1}`}
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className='text'>
        {`${timeDiff.months} Meses, ${timeDiff.days} Dias, ${timeDiff.hours} Horas, ${timeDiff.minutes} Minutos, ${timeDiff.seconds} Segundos`}
      </div>
      <div className='text'>
        Para lembrar do dia que tomei a melhor decisão que eu já fiz.
      </div>
    </div>
  );
}

export default App;

import '../styles/Novedades.css'
import { useEffect, useState } from 'react';
import torneoFemenino from '../assets/Novedad2.png'
import evento1 from '../assets/Novedad1.png'
import evento2 from '../assets/Novedad2.png'
import evento3 from '../assets/Novedad3.png'
import evento4 from '../assets/Novedad4.png'
//import dataSlider from './dataSlider'

export const Novedades = () => {
    useEffect(() => {
  
      const handleNavClick = (event) => {
        event.preventDefault()
  
        const targetId = event.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId)
  
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }
    };

    const navLinks = document.querySelectorAll('.nav a')
  navLinks.forEach((link) => {
    link.addEventListener('click', handleNavClick)
  })

 return () => {
    navLinks.forEach((link) => {  
      link.removeEventListener('click', handleNavClick) 
    });
  };
  }, [])

  return (
  <div className="carrusel">
    <div className="elemento">
        <h1>No te pierdas de nuestro eventos</h1>
    </div>
    <div className="imagenes">
    <img className="evento" src={evento1}/>
    <img className="evento"src={evento2}/>
    <img className="evento"src={evento3}/>
    <img className="evento"src={evento4}/>
    </div>
    

  </div>
  )
}
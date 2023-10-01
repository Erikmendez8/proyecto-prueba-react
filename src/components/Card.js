import React from 'react'
import image1 from "../assets/chivasjs.png"

export default function Card() {
  return (
    <div className='Card text-center bg-dark'>
      <div className='Card-body text-light'>
        <img src={image1} alt='imagen1'/>
        <h4 className='Card-title'> PAGINA WEB</h4>
        <p className='Card-text-secondary'>
          TECNOLOGIAS COMPUTACIONALES II 
        </p>
        <a href='#!' className='btn btn-outline-secundary rounded-1'>
          Ir Al Sitio Web
        </a>

      </div>
   
    </div>
  )
}

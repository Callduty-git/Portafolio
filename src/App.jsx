import { useState } from 'react'
import foto from './assets/foot.jpg'
import html from './assets/html.png'
import css from './assets/css.png'
import javas from './assets/javas.webp'
import react from './assets/react.webp'
import tail from './assets/tail.png'
import mysql from './assets/mysql.png'
import mamp from './assets/mamp.avif'
import xampp from './assets/xampp.png'
import node from './assets/node.png'
import php from './assets/php.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h 9/10'>
        <a href="" target="_blank">
          <img src={foto} className="logo" alt="foto" />
        </a>
      </div>
      <h1>Portafolio Juan Zabala</h1>
      <div className="card">
        <h2>Información personal</h2>
        <p className=''>
          <h3>Hola</h3><br></br>Mi nombre completo es Juan Pablo Zabala Gómez, Tengo 18 años, vivo en Garzón Huila donde actualmente estoy estudiado el Tecnologo de analisis y desarrollo de software en el SENA sede: Centro agroempresarial y desarrollo pecuario del Huila.<br></br>
          <h3>Logros y Habilidades:</h3>   </p></div>
          <ul className=''>
          <li>Bachillerato</li>
          <li>Técnico en sistemas</li>
          <li>Tecnólogo en analisis y desarrollo de software</li><br></br>    
          <img src={html} className="logo"/><div className='bottom-0 left-0'>Html</div>
          <img src={css} className="logo"/><div className='bottom-0 left-0'>Css</div>
          <img src={javas} className="logo"/><div className='bottom-0 left-0'>Javascript</div>
          <img src={react} className="logo"/><div className='bottom-0 left-0'>React</div>
          <img src={tail} className="logo"/><div className='bottom-0 left-0'>Tailwind</div>
          <img src={mysql} className="logo"/><div className='bottom-0 left-0'>Mysql</div>
          <img src={php} className="logo"/><div className='bottom-0 left-0'>Php.js</div>
          <img src={mamp} className="logo"/><div className='bottom-0 left-0'>MAMP</div>
          <img src={xampp} className="logo"/><div className='bottom-0 left-0'>XAMPP</div>
          <img src={node} className="logo"/><div className='bottom-0 left-0'>Node.js</div>
          </ul>

 
    </>
  )
}

export default App

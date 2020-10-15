import React from 'react';

import '../styles/landing.css';

import { FiArrowRight } from 'react-icons/fi'

import logoImg from '../images/Logo.svg'

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">

        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve Felicidade para o Mundo</h1>
          <p>Visite orfanatos e mude o dia
            de muitas crianças.</p>
        </main>
        <div className="location">
          <strong>Guarulhos</strong>
          <span>São Paulo</span>
        </div>

        <a href="" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </a>
      </div>
    </div>
  );
}

export default Landing;
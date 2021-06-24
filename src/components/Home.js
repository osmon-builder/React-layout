import React from 'react';
import './Home.css';


import { Navbar } from './Nav/Navbar';
import { Images } from './Images';


export const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="img-fondo header">
          <h1>EXPLORE BEYOND HORIZON</h1>
          <p>Magna mundi referrentur quo, no rebum dignissim qui.
            <br />
            Per quodsi accusata id, agam labores.
          </p>
          <button type="button" class="main-btn"> VIEW OUR WORK </button>
        </div>
      </div>
      <div>
        <ul className="ul-center">
            <li>All</li>
            <li>Branding</li>
            <li>Web</li>
            <li>Photography</li>
            <li>App</li>
        </ul>
      </div>
      <div className="container">
        <Images />
      </div>

      <button className="footer-btn">Show Me More</button>


    </>
  )
}

import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import coverImage from '../../assets/1.jpeg';
function Nav(props) {

  return (
    <header className="row p-3 h-3 bg-secondary " style={{backgroundImage:`url(${coverImage})`}} >
      <a className='text-decoration-none col-5' data-testid="link" href="/">
      <h1 className="text-white" style={{fontSize:"60px", fontFamily: 'Poiret One'}}>
          Satwinder
      </h1>
      </a>
      <nav className='col-7 my-3'>
        <ul className='row list-unstyled' style={{fontSize:"30px"}}>
          <li className="col ">
            <a className='text-decoration-none text-white' data-testid="about" href="#about" >
              About me
            </a>
          </li>
          <li className="col">
            <a className='text-decoration-none text-white' data-testid="about" href="#about" >
              Portfolio
            </a>
          </li>
          <li className="col">
            <a className='text-decoration-none text-white' data-testid="about" href="#about" >
               Contact
            </a>
          </li>
          <li className="col">
            <a className='text-decoration-none text-white' data-testid="about" href="#about" >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

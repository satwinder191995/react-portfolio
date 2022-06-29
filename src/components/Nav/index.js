import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import coverImage from '../../assets/1.jpeg';
function Nav(props) {
  const {
    aboutSelected,
    setAboutSelected,
    resumeSelected,
    setResumeSelected,
    portfolioSelected,
    setPortfolioSelected,
    contactSelected,
    setContactSelected,
  } = props;
  return (
    <header className="row p-3 h-3 bg-secondary" style={{backgroundImage:`url(${coverImage})`}} >
      <a className='text-decoration-none col-md-12 col-lg-5 ' data-testid="link" href="/">
      <h1 className="text-white" style={{fontSize:"60px", fontFamily: 'Poiret One'}}>
          Satwinder
      </h1>
      </a>
      <nav className='col-lg-7 my-3'>
        <ul className='row list-unstyled py-2' style={{fontSize:"1.5rem"}}>
          <li className="col-sm-3 ">
            <a className={aboutSelected?'text-decoration-none text-primary':'text-decoration-none'} 
            data-testid="about" href="#about" 
            onClick={() => {
              setResumeSelected(false);
              setContactSelected(false);
              setPortfolioSelected(false);
              setAboutSelected(true);
              }}>
              About me
            </a>
          </li>
          <li className="col-sm-3">
            <a className={portfolioSelected ? 'text-decoration-none text-primary':'text-decoration-none'} 
            href="#portfolio"
             onClick={() => {
              setResumeSelected(false);
              setContactSelected(false);
              setPortfolioSelected(true);
              setAboutSelected(false);
              }}>
              Portfolio
            </a>
          </li>
          <li className="col-sm-3">
            <a className={contactSelected ? 'text-decoration-none text-primary':'text-decoration-none'}
             href="#contact"
            onClick={() => {
              setResumeSelected(false);
              setContactSelected(true);
              setPortfolioSelected(false);
              setAboutSelected(false);
            }
            } >
               Contact
            </a>
          </li>
          <li className="col-sm-3">
            <a 
            className={resumeSelected ? 'text-decoration-none text-primary':'text-decoration-none'}
             href="#resume"
             onClick={() => {
              setResumeSelected(false);
              setResumeSelected(true);
              setContactSelected(false);
              setAboutSelected(false);
              }} >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

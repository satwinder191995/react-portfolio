import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Project from './components/Project';
import Footer from './components/Footer';
function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="App" >
   <Nav
   aboutSelected={aboutSelected}
   setAboutSelected={setAboutSelected}
   resumeSelected={resumeSelected}
   setResumeSelected={setResumeSelected}
   portfolioSelected={portfolioSelected}
   setPortfolioSelected={setPortfolioSelected}
    contactSelected={contactSelected}
    setContactSelected={setContactSelected}
   ></Nav>
   <main>
    {portfolioSelected ?(
      <Project></Project>
    ):
    contactSelected ? (
   <ContactForm></ContactForm>
    ):resumeSelected ?(
      <Resume></Resume>
    ):<About></About>
    }
   </main>
   <Footer></Footer>
    </div>

  );
  }
export default App;

import React from 'react';

function Resume(props) {
  return (
    <section>
       
       <h1>Resume</h1> 
        <h2 style={{fontSize:"22px"}}>Download my <a href="./resume.txt" style={{fontSize:"20px"}} download>Resume</a></h2>
        <h3>Front-end Proficiencies</h3>
        <ul>
          <li>HTMl</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Jquery</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL , Sequelize</li>
        <li>MongoDB,Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
        </ul>
    </section>
  );
}
export default Resume;

import React from 'react';
import avatar from '../../assets/satwinder.png';
function About() {
  return (
    <section className="my-5">
      <h2 className='mx-5'>
        About me
      </h2>
      <div className='border border-dark rounded-circle m-3' 
      style={{width:"200px" , height:"200px",backgroundImage:`url(${avatar})`,backgroundSize: "100% 100%"}}>
      </div>
      <p className='m-4' style={{fontSize:"25px"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
          condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
          mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
          Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
          justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
          dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
          Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
        </p>
    </section>
  );
}

export default About;

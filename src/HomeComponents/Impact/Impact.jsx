import React from 'react';
import CountUp from 'react-countup';
import './Impact.css';

const Impact = () => {
  return (
    <div className='impact-section' id='impmain'>
      <h1>OUR <span id='spanimpact'>IMPACT</span></h1>
      <div className='impnos'>
        <div className='imp1'>
          <h1 id='imp1no'>
            <CountUp end={15} separator="," duration={15} />+
          </h1>
          <h2 id='imp1h2'>LAC</h2>
          <p id='imp1p'>children and <br /> their families are <br /> impacted every year</p>
        </div>
        <div className='imp1'>
          <h1 id='imp1no'>
            <CountUp end={2000} separator="," duration={15} />+
          </h1>
          <h2 id='imp1h2'>VILLAGES</h2>
          <p id='imp1p'>and slums <br />are reached out <br />to across the country</p>
        </div>
        <div className='imp1'>
          <h1 id='imp1no'>
            <CountUp end={400} separator="," duration={15} />+
          </h1>
          <h2 id='imp1h2'>PROJECTS</h2>
          <p id='imp1p'>focused on<br />education, healthcare<br />and women empowerment</p>
        </div>
        <div className='imp1'>
          <h1 id='imp1no'>
            <CountUp end={25} separator="," duration={15} />+
          </h1>
          <h2 id='imp1h2'>STATES</h2>
          <p id='imp1p'>are reached <br />including the <br />remotest areas</p>
        </div>
      </div>
    </div>
  );
}

export default Impact;

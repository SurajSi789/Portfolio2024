import { Link } from "react-router-dom";
import React from 'react'
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {

  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Suraj</span>
        👋
        <br />
        A Software Engineer from Pune, India 🇮🇳
        <br />
        Swipe on this Island to know more.
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          I am currently working in Capgemini, India as Test Engineer <br /> and have picked up many skills along the way
        </p>

        <Link to='/experience' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        I have worked on few testing projects and developed few self projects. <br/> Click on the button below to explore more.
      </p>

      <Link to='/projects' className='neo-brutalism-white neo-btn'>
        Projects
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Want to know more about me? <br/> I'm just a few keystrokes away
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
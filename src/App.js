import './App.css';
import Cover from './components/cover';
import Faq from './components/faq';
import Footer from './components/footer';
import Game from './components/game';
import LabAssistant from './components/lab_assitant';
import Referral from './components/referral';
import Roadmap from './components/roadmap';
import Scheduled from './components/scheduled';
import SecondGame from './components/second_game';
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";


function App() {

  return (
    <>
      <div className='bg_1'>
        <Cover />
      </div>
      <div className='bg_2'>
        <LabAssistant />
        <Game />
        <SecondGame />
        <Referral />
        <Faq />
        <Roadmap />
        <Scheduled />
        <Footer />
      </div>
    </>
  );
}

export default App;

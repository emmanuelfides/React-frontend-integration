import Navbar from '../navbar';
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import './index.css';
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import Countdown from "react-countdown";

const fade_right = keyframes`
from {
    opacity: 0;
    -webkit-transform: translate3d(-50px, 0, 0);
    transform: translate3d(-50px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
`;

const renderer = ({ days, hours, minutes, seconds }) => {

    return (
        <div className='contdown_wrapper'>
            <span className='countdown_text'>
                {days}<br /> DAYS
            </span>
            <span className='semi_colon'>
                :
            </span>
            <span className='countdown_text'>
                {hours} <br /> HOURS
            </span>
            <span className='semi_colon'>
                :
            </span>
            <span className='countdown_text'>
                {minutes} <br /> MINUTES
            </span>
            <span className='semi_colon '>
                :
            </span>
            <span className='countdown_text '>
                {seconds} <br /> SECONDS
            </span>
        </div>
    );
}

function Cover() {
    const [defaultAccount, setDefaultAccount] = useState("");

    var date = new Date("Wed May 12 14:00:00 EST 2022")
    return (
        <div id='connect' className='cover_container'>
            <Navbar />
            <Reveal triggerOnce={true} keyframes={fade_right}>

                <div className='cover_content'>
                    <h1>
                        HIRE LAB ASSISTANTS
                        <br />
                        TO DISCOVER NEW
                        <br />
                        FORMULAS
                    </h1>
                    <h3> Launch Timer</h3>
                    <Countdown date={date} renderer={renderer} />

                    <div className='cover_button'>
                        <button className='theme_button'>
                        {defaultAccount.length > 0 ? (
                         String(defaultAccount).substring(0, 6) +
                         "..." +
                        String(defaultAccount).substring(38)
                        ) : (
                        <span>Connect Wallet</span>
                        )}
                        </button>
                    </div>
                    <div className='cover_bottom_text'>
                        <h1>A Play2Earn Game on BSC</h1>
                    </div>
                </div>
            </Reveal>
        </div>
    );
}

export default Cover;

import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import './index.css';
import erc20abi from "../../contracts/abi.json";
import LOGO from '../../assets/images/logo.png'
import { HashLink } from 'react-router-hash-link';
import { AiOutlineMenu } from 'react-icons/ai'
import { VscChromeClose } from 'react-icons/vsc'
import img from '../../assets/images/telegram.png'


export function Navbar({ onClick }) {
  const [toggle, setToggle] = useState(false)
  const handleClick = (value) => {
    setToggle(!value)
  }
    const [errorMessage, setErrorMessage] = useState("");
    const [defaultAccount, setDefaultAccount] = useState("");
    const address = "0xc52a3271F23ADf7486b892899DaCf26c88d00051";
    const [provider, setProvider] = useState(null);

  const connectWalletHandler = async () => {
    if (window.ethereum && defaultAccount == "") {
      // set ethers provider
      setProvider(new ethers.providers.Web3Provider(window.ethereum));

      // connect to metamask
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(async(result) => {
          setDefaultAccount(result[0]);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else if (!window.ethereum) {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  return (
    <>
      <div className="navbar_container">
        <div className='logo_container'>
          <img src={LOGO} alt='' />
        </div>
        <div className='right_container'>
          <div className='menu_icon'>
            <span>
              <HashLink to={'/#dashboard'}>
                Dashboard
              </HashLink>
            </span>
            <span>
              <HashLink to={'/#game'}>
                Game
              </HashLink>
            </span>
            <span>
              <HashLink to={'/#faq'}>
                FAQ
              </HashLink>
            </span>
            <span className='telegram_'>
              <img src={img} alt='' />
            </span>
          </div>
          <button className='theme_button' onClick={connectWalletHandler}>
          {defaultAccount.length > 0 ? (
          String(defaultAccount).substring(0, 6) +
          "..." +
          String(defaultAccount).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
            </button>
        </div>
      </div>
      <div className="mobile_navbar_container">
        <div className='m_logo'>
          <img src={LOGO} alt='' />
        </div>

        <div className="icons_container">
          <span className='telegram_'>
            <img src={img} alt='' />
          </span>
          <span onClick={() => handleClick(toggle)} className="toggle_btn">

            {toggle ? <VscChromeClose /> : <AiOutlineMenu />}
          </span>
        </div>
        {toggle ?
          <div className="menu_section_mobile">
            <span onClick={() => handleClick(toggle)} >
              <HashLink smooth to={'/#dashboard'}>Dashboard</HashLink>
            </span>

            <span onClick={() => handleClick(toggle)} >
              <HashLink smooth to={'/#game'}>Game</HashLink>
            </span>
            <span onClick={() => handleClick(toggle)} >
              <HashLink smooth to={'/#faq'}>faq</HashLink>
            </span>
            <span onClick={connectWalletHandler} >
            {defaultAccount.length > 0 ? (
          String(defaultAccount).substring(0, 6) +
          "..." +
          String(defaultAccount).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
            </span>
          </div>
          : null
        }
      </div>
    </>
  );

}

export default Navbar;

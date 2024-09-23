import './index.css'
import logo from "../../assets/images/footer_logo.png"
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";


const fade_ = keyframes`
from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

function Footer() {
  return (
    <div className='footer_container'>
      <Reveal triggerOnce={true} keyframes={fade_}>
        <div className='f_logo_container'>
          <img src={logo} alt="" />
        </div>
      </Reveal>
      <Reveal triggerOnce={true} keyframes={fade_}>
        <div className='button_container'>
          <button className='theme_button'>Contract</button>
          <button className='theme_button'>Lightpaper</button>
        </div>
        <div className='footer_credits'>
          Copyright ©2022 by Einstein.Mine - All Rights Reserved
        </div>
      </Reveal>
    </div >
  )
}

export default Footer;
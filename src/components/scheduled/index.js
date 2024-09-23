import './index.css'
import img12 from "../../assets/images/12.png"
import img13 from "../../assets/images/13.png"
import './index.css';
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const pulse = keyframes`
from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
`;



function Scheduled() {
  return (
    <div className='scheduled_container'>
      <div className='theme_heading'>
        <h1>SCHEDULED</h1>
        <h2>SCHEDULED</h2>
      </div>
      <div className='scheduled_images'>
        <div className='first_image'>
          <Reveal triggerOnce={true} keyframes={pulse}>
            <img src={img13} alt="" />
          </Reveal>
          <h3>Social Token <br /> Distribution</h3>
          <h1>June <br /> 2022</h1>
        </div>
        <div className='sec_image'>
          <Reveal triggerOnce={true} keyframes={pulse}>
            <img src={img12} alt="" />
          </Reveal>
          <h3>Decentralized <br /> Lending Protocol</h3>
          <h1> Fall <br />  2022</h1>
        </div>
      </div>
    </div>

  )
}

export default Scheduled;
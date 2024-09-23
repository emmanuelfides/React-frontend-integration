import "./index.css"
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";


const fade_right = keyframes`
from {
    opacity: 0;
    -webkit-transform: translate3d(-100px, 0, 0);
    transform: translate3d(-100px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
`;

function Game() {
  return (
    <div id='game' className="main_game_cnt">
      <div className="theme_heading">
        <h1>GAME</h1>
        <h2>GAME</h2>
      </div>
      <div className="lab_content">
        <h1>Lab Procedure - Getting Started</h1>
        <p>Our algorithm allows every user to build ownership while profiting handsomely, no matter their farming
          Strategy. It will not allow any single user to have an unfair advantage over other users. We believe it is a
          truly beautiful thing.</p>
      </div>

      <Reveal triggerOnce={true} keyframes={fade_right} duration={1500}>
        <div className="sub_game_content">
          <div className="game_text">
            <div className="l_num">1</div>

            <h1>Create a Wallet</h1>
            <p>Download MetaMask or TrustWallet and create a wallet. Add the Binance Smart Chain to your
              network-list.</p>
          </div>
          <div className="game_text">
            <div className="l_num">2</div>

            <h1>Get <br /> BNB</h1>
            <p>Buy BNB on an
              exchange (i.e.
              Binance). Transfer
              BNB to your
              wallet address.
              BEP-20 addresses
              start with a “0x".</p>
          </div>
          <div className="game_text">
            <div className="l_num">3</div>

            <h1>Connect<br /> Your<br /> Wallet</h1>
            <p>At the top of the site, click "Connect wallet", confirm the action, after which you should see the numbers of
              your wallet</p>
          </div>
          <div className="game_text">
            <div className="l_num">4</div>

            <h1>Hire <br />Assistants</h1>
            <p>Enter the amount of BNB and click on 'Hire Martians'. Your Martians will start their exploration and
              earn meteorites for you right away.</p>
          </div>
          <div className="game_text">
            <div className="l_num">5</div>

            <h1>Trade/<br /> Sell<br /> Formulas</h1>
            <p>Fill in how many meteorites worth of Martians you want to hire and click 'Trade meteorites'. You
              can also sell them to the captain for BNB.</p>
          </div>
        </div>
      </Reveal>
      <div className="mobile_br_line">

      </div>
    </div>

  )
}

export default Game;
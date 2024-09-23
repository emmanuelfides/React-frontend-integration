import './index.css'
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const fade_top = keyframes`
from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100px, 0);
    transform: translate3d(0, 100px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
`;

function SecondGame() {
    return (

        <div className='game_container'>
            <Reveal triggerOnce={true} cascade={true} keyframes={fade_top} duration={500}>
                <div className='game_heading'>
                    <h1>Lab Facts</h1>
                    <div className='labfact_content'>
                        <span>Daily Return - Up to 3%</span>
                        <span>APR - 1095%</span>
                        <span>APR - 2%</span>
                        <span>Referral - 12.5%</span>
                    </div>
                </div>
                <div className='game_heading'>
                    <h1>Einsteins Mine Info</h1>
                    <p>Einstein Mine pays up to 3% daily, according to the current collecting efficiency rate. The
                        collecting efficiency rate fluctuates as you and other players hire Lab Assistants, compound
                        earnings and withdraw BNB. The object of the game is hiring more Assistants, sooner and more
                        often than other players. This in turn earns you more BNB faster.</p>
                </div>
                <div className='game_heading'>
                    <h1>Sustainable</h1>
                    <p>Einstein Mine pays an average of 7% daily, allowing the players to rest easy knowing that their
                        deposits have unlimited growth potential and a maximum, improbable risk of less than 2%.</p>
                </div>
                <div className='game_heading'>
                    <h1>Withdraw Cool Down</h1>
                    <p>While you can hire Lab Assistants as many times as you wish, the selling of formulas is restricted
                        to once a week. This is carried out for project sustainability.
                    </p>
                </div>
                <div className='game_heading'>
                    <h1>Verified Public Contract</h1>
                    <p>This contract is immutable. It cannot be changed or altered in any way, shape or form. The
                        Einstein Mine contract is public, verified and can be viewed here on BSCScan.</p>
                </div>
            </Reveal>
        </div >
    )
}

export default SecondGame;
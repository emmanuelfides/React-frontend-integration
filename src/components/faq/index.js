import './index.css'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useAccordionButton, AccordionContext } from 'react-bootstrap';
import { useContext } from 'react';
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

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <div className='faq_header' onClick={decoratedOnClick}>
      <h3>{children} </h3>
      <button className={isCurrentEventKey ? 'b_active' : ''}> + </button>
    </div>

  );
}

function Faq() {
  return (
    <div id='faq' className="faq_container">
      <div className='theme_heading'>
        <h1>FAQ</h1>
        <h2>FAQ</h2>
      </div>
      <Reveal triggerOnce={true} keyframes={fade_right} duration={1500}>
      <div>
        <Accordion className='faq_wrapper' defaultActiveKey="">
          <Card>
            <Card.Header>
              <ContextAwareToggle eventKey="0">1. What is the price of hiring Lab Assistants</ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Lab Assistants do not have a set price. Higher TVL means more Formulas per BNB, and Lower TVL
                means less Lab Assistants. This creates a level playing field so no user can be late. There is NO
                calculator available to work this out.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <ContextAwareToggle eventKey="1"> 2. Can I take my initial BNB back</ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Over time! Lab Assistants are not bought, they are hired therefore they can't be sold. Once Assistants are
                hired they work for you indefinitely, providing you with an unlimited amount of BNB at a starting rate of up
                to 3% daily.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <ContextAwareToggle eventKey="2"> 3. How much am I paying in Fees</ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>There is 2% dev fee taken upon ALL deposits, compounds and withdrawal from Einstein Mine. The only
                fee that users personally incur is their transaction gas fees, which is charged by the BSC network. These
                fees will be used to develop the utilities of our ecosystem in order to give our players ownership of a
                revenue generating platform.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <ContextAwareToggle eventKey="3"> 4. When is the Best Time to Hire Lab Assistants</ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>Always! No matter when you hire Lab Assistants, you will build platform equity and begin with a return
                rate of up to 3% daily</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <ContextAwareToggle eventKey="4"> 5. Why are my rewards not growing?</ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>Your withdrawal habits affect the rewards. If you withdraw too much, your daily percentage drops. If you
                only started with a small deposit it will take time to display on the dApp; it only goes to 3 decimal places.
                TVL daily increase can cause lower daily percentage.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <ContextAwareToggle eventKey="5"> 6. How often should I compound</ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>We recommend that you compound at least twice per day in order to maximize your compound count but
                you are free to do so as often as you wish. Please keep in mind that compounding helps players avoid the
                feedback tax as well as build their cash flow position in our greater phase 1 ecosystem.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <ContextAwareToggle eventKey="6"> 7. How is Einstein Mine Sustainable</ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="6">
              <Card.Body>Einstein is sustained by continued community support, just as every other crypto coin, token or project.
                The difference is Einstein Mine also has an algorithm and multiple mechanics that allows players to
                accumulate platform revenue sharing while employing multiple mechanics that prevent players from
                instantly dumping their coins onto the community.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <ContextAwareToggle eventKey="7"> 8. Is is Better to Compound or Pocket</ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="7">
              <Card.Body>By design, compounding will be more profitable than pocketing in the long-term. By compounding you
                build your revenue share position in the utility driven ecosystem and avoid the 80% feedback tax</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <ContextAwareToggle eventKey="8"> 9. How Do Referrals Work</ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="8">
              <Card.Body>Once your BSC wallet is connected to the Einstein Mine website, you will notice your referral address
                appears at the bottom of the page. When a new user hires Lab Assistants after using your personal
                referral link, the contract will add.6.25% of that to your Lab Assistant count instantly and add the other
                6.5% to the greater liquidity pool in order to ensure contract longevity. Our preferred strategy is to be
                smart, and use the referral system to hire more Assistants in order to build yourself a stream of income.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <ContextAwareToggle eventKey="9"> 10. What is the Best Strategy</ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="9">
              <Card.Body>We recommend the tried and tested method - Compound your formulasdays for 6 days and withdraw
                once a week. In these 6 days you will build your cash flow and ownership, while withdrawing once a week
                in order to begin reclaiming your initial deposit.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <ContextAwareToggle eventKey="10"> 11. How to Use Einstein Mine on The Phone</ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="10">
              <Card.Body>Simply use any browser that you want and choose WalletConnect or Metamask to connect to your
                wallet's app on your phone.</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
      </Reveal>
    </div>



  )
}

export default Faq;
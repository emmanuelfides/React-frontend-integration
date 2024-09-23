import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import erc20abi from "../../contracts/abi.json";
import './index.css'
import icon from '../../assets/images/round.png'
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const fade_top = keyframes`
from {
    opacity: 0;
    -webkit-transform: translate3d(0, 50px, 0);
    transform: translate3d(0, 50px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
`;


function LabAssistant() {
  const [defaultAccount, setDefaultAccount] = useState("");
  const [rate, setRate] = useState("?");
  const [errorMessage, setErrorMessage] = useState("");
  const [Balance, setBalance] = useState("?");
  const [Staked, setStaked] = useState("?");
  const [UserInfo, setUserInfo] = useState({
    compoundCount: "?",
    rewards: "?",
    egg: "?",
    referrals: "?",
    initial: "?",
    total: "?",
    withdrawn: "?",
    miners: "?"
  });
  const address = "0xc52a3271F23ADf7486b892899DaCf26c88d00051";
  const [provider, setProvider] = useState(null);
  const ref = "0x1FE35381E6fB8580b05bc297f82fD0da01CF75bd";

  const HireAssistants = async (e) => {
    if (window.ethereum && defaultAccount == "") {
    e.preventDefault();
    const data = new FormData(e.target);
    const amount = ethers.utils.parseEther(data.get("amount").toString());
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const signerAddress = await signer.getAddress();
    const erc20 = new ethers.Contract(address, erc20abi, signer);
    await erc20.hireFarmers(ref,{from: signerAddress, value: amount})
  } else if (!window.ethereum) {
    console.log("Need to install MetaMask");
    setErrorMessage("Please install MetaMask browser extension to interact");
  }
  }

  const HireMoreAssistants = async () => {
    if (window.ethereum && defaultAccount == null) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const erc20 = new ethers.Contract(address, erc20abi, signer);
    await erc20.hireMoreFarmers('true');
    } else if (!window.ethereum) {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  }

  const SellFormulas = async () => {
    if (window.ethereum && defaultAccount == null) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const erc20 = new ethers.Contract(address, erc20abi, signer);
    await erc20.sellCrops();
    } else if (!window.ethereum) {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  }

  const handleChange = async (event) => {
    const amount = ethers.utils.parseEther(event.target.value.toString());
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const erc20 = new ethers.Contract(address, erc20abi, signer);
    const e = await erc20.calculateEggBuySimple(amount);
    setRate(ethers.utils.formatUnits(e, 0));
  }


  useEffect(() => {
    if (defaultAccount !== "") {
      setProvider(new ethers.providers.Web3Provider(window.ethereum));

      // connect to metamask
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(async(result) => {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const erc20 = new ethers.Contract(address, erc20abi, provider);
          setBalance(ethers.utils.formatEther(await erc20.getBalance()));
          setStaked(ethers.utils.formatEther(await erc20.totalStaked()));
          const contract = await erc20.getUserInfo(result[0]);
          const eggs = await erc20.getMyEggs();
          const compoundCount = ethers.utils.formatUnits(contract[10], 0);
          const rewards = ethers.utils.formatEther(await erc20.getAvailableEarnings(result[0]));
          const egg = ethers.utils.formatUnits(eggs, 0);
          const referrals = ethers.utils.formatUnits(contract[6], 0);
          const initial = ethers.utils.formatEther(contract[0]);
          const total = ethers.utils.formatEther(contract[1]);
          const withdrawn = ethers.utils.formatEther(contract[7]);
          const miners = ethers.utils.formatUnits(contract[2], 0);

          setUserInfo({
            compoundCount,
            rewards,
            egg,
            referrals,
            initial,
            total,
            withdrawn,
            miners
          });
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  }, [defaultAccount]);
  return (
    <div id='dashboard' className='lab_container'>
      <Reveal triggerOnce={true} keyframes={fade_top}>
        <div className='l_first_section'>
          <div className='l_item_wrapper'>
            <div>Contract<br /> Balance</div>
            <div>{(+Balance).toFixed(2)} <span>BNB</span></div>
          </div>
          <div className='l_item_wrapper'>
            <div>Compound<br /> count(farmer)</div>
            <div>{UserInfo.compoundCount} </div>
          </div>
          <div className='l_item_wrapper'>
            <div>Total<br /> Staked</div>
            <div>{(+Staked).toFixed(2)} <span>BNB</span></div>
          </div>
          <div className='l_item_wrapper'>
            <div>Rewards<br /> full in </div>
            <div>48 hrs </div>
          </div>
          <div className='l_item_wrapper'>
            <div>Your<br /> Rewards</div>
            <div>{(+UserInfo.rewards).toFixed(2)} <span className='blueColor'>BNB</span></div>
          </div>
        </div>
      </Reveal>
      <Reveal triggerOnce={true} keyframes={fade_top}>
        <div className='l_first_section l_input_box_2'>
          <div className='l_item_wrapper'>
            <div>Initial<br /> Deposit</div>
            <div>{(+UserInfo.initial).toFixed(2)} <span>BNB</span></div>
          </div>
          <div className='l_item_wrapper'>
            <div>Total<br /> Deposit</div>
            <div>{(+UserInfo.total).toFixed(2)} <span>BNB</span></div>
          </div>
          <div className='l_item_wrapper'>
            <div>Withdrawn<br /> Amount</div>
            <div>{(+UserInfo.withdrawn).toFixed(2)} <span>BNB</span></div>
          </div>
          <div className='l_item_wrapper'>
            <div>Referral<br /> Count</div>
            <div>{UserInfo.referrals}</div>
          </div>
        </div>
      </Reveal>
      <Reveal triggerOnce={true} keyframes={fade_top}>
        <div className='l_input_box'>
          <h1>Lab Assistants: <span className='blueColor'>{UserInfo.miners}</span><br />Formulas: <span>{UserInfo.egg}</span></h1>
          <p><img src={icon} alt='' /> 80% Sales Tax: <span>Active</span> </p>
          <form className='input_wrapper' onSubmit={HireAssistants}>
            <div className='input_wrapper_div_input'>
              <input className='number-wrapper' name="amount" type="number" step="0.001" onChange={handleChange}></input><span className='input_bnb'>BNB</span>
            </div>
            <div className='input_wrapper_div_button'>
              <button className='theme_button' type="submit">Hire {rate} Assistants</button>
            </div>
          </form>
          <div className='l_botton_buttons'>
            <button className='theme_button' onClick={HireMoreAssistants}>Hire More Assistants</button>
            <button className='theme_button' onClick={SellFormulas}>Sell Formulas</button>
          </div>
        </div>
      </Reveal>
      <Reveal triggerOnce={true} keyframes={fade_top}>
        <div className='l_bottom_heading'>
          <h1>Cool Down: 14 Days 0 Hours</h1>
        </div>
      </Reveal>

    </div >
  )
}

export default LabAssistant;
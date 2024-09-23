import './index.css'
import React, { useState, useEffect } from "react";

function Referral() {
  const [defaultAccount, setDefaultAccount] = useState("");

  return (
    <div className='referral_container'>
      <div className='theme_heading'>
        <h1>REFERRAL</h1>
        <h2>REFERRAL</h2>
      </div>
      <div className='referral_text'>
        <p>
        {defaultAccount.length > 0 ? (
          <span>https://bnb.com?ref={defaultAccount}</span>
          ) : (
          <span>Your referral link will appear here once you connect your wallet</span>
          )}
        </p>
      </div>
      <div className='r_button_container'>
        <button className='theme_button'>Copy</button>
      </div>
    </div >
  )
}

export default Referral;
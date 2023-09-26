import React, { useState } from 'react';
import './index.css'

const OTPVerificationScreen = ({ history }) => {
  const [enteredOTP, setEnteredOTP] = useState('');

  const handleVerifyOTP = () => {
    const storedOTP = localStorage.getItem('otp');

    if (enteredOTP === storedOTP) {
      alert('OTP Verified Successfully')
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className='container'>
      <h1>Please verify Mobile number</h1>
      <p>An OTP is sent to +916305518428</p>
      <p>Change Phone Number</p>
      <input
        type="text"
        placeholder="Enter OTP"
        value={enteredOTP}
        onChange={(e) => setEnteredOTP(e.target.value)}
      /> <br/>
      <button className='Button' onClick={handleVerifyOTP}>Verify</button>
    </div>
  );
};

export default OTPVerificationScreen;

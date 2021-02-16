import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';
import React from 'react';
import './Login.css';

function Login() {
  const signIn = () => {
    // do clever google login shizz....
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          src='https://www.humachallenge.com/croppedImages/Logos/COVID-Safe-Badge-679891-500px.jpg'
          alt=''
        />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;


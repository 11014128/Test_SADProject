import { Button } from '@material-ui/core';
import React from 'react';

import { auth, provider } from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../Reducer';
import './login.css';
import logo from './images/image_logo_black.png';   //adding logo


const Login = () => {

  const [state, dispatch] = useStateValue();
  const [showResults, setShowResults] = React.useState(false);
  const [buttonText, setButtonText] = React.useState("Login"); 
  const [ifRegBtnText, setIfRegBtnText] = React.useState("Not Registered?");  
  const [registerBtnTxt, setRegisterBtnTxt] = React.useState("Create an Account");
  const handleClick = () => {
    switch (registerBtnTxt) {
      case "Create an Account":
        setShowResults(true);
        setButtonText("Create");
        setRegisterBtnTxt("Login");
        setIfRegBtnText("Registered?");
        break;
      case "Login":
        setShowResults(false);
        setButtonText("Login");
        setRegisterBtnTxt("Create an Account");
        setIfRegBtnText(" Not Registered?");
        break;
      default:
        setButtonText("Create an Account");
        break;
    }
    

  };
  

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);

        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

 
  return (
    <div className='login'>
      <div className='login_logo'>

        <div class="row">
          <div class="column">
            <img className="logo" src={logo} /></div>
          <div class="column">
            <h1 className='title'>DOC-EDITOR</h1></div>

        </div>

      </div>
      <div className="login-show">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        { showResults ? <input type="text" placeholder="Email ID" /> : null }
        <button type="submit" >{buttonText}</button>
        <p1>{ifRegBtnText}<a href="#" onClick={() => handleClick()}> {registerBtnTxt}</a></p1>
        

      </div>
      <div className='login-via'>
        <p4>OR </p4>
        <input type="button" value="Sign in with Google" onClick={signIn} />

      </div>


    </div>
  );
};



export default Login;

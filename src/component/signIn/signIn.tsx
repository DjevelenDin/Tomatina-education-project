import React from "react";
import "./signIn.css";
import myAccount from "../myAccount/myAccount";
import { Link } from 'react-router-dom';

export default class SignIn extends React.Component {
  render() {
    return (
        <>
      <div className="haveAccount">
        <p>Вже зареєстровані?</p>
        <button className="signIn">
        <Link className='myAccount' to="/myAccount">
          Увійти
          </Link>
   
        </button>
        
      </div>
      </>
    );
  }
}

import React from "react";
import "./signIn.css";
import myAccount from "../myAccount/myAccount";

export default class SignIn extends React.Component {
  render() {
    return (
        <>
      <div className="haveAccount">
        <p>Вже зареєстровані?</p>
        <button className="signIn">Увійти</button>
        
      </div>
      </>
    );
  }
}

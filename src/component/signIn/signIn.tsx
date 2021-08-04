import React from "react";
import "./signIn.css";
import myAccount from "../MyAccount/myAccount";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const SignIn = () => { 
 
  const { t, i18n } = useTranslation();

    const handleClick = (lang: any) => {
      i18n.changeLanguage(lang);
    }

    return (
        <>
      <div className="haveAccount">
        <p>{t("signIn.already")}</p>
        <button className="signIn">
        <Link className='myAccount' to="/myAccount">
        {t("signIn.sign")}
          </Link>
   
        </button>
        
      </div>
      </>
    );
  
};

export default SignIn;
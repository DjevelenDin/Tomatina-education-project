import React from 'react';
import './header.css'
import HeaderContent from './../headerContent/headerContent';
import HeaderDelivery from './../headerDelivery/headerDelivery';

const Header = ()=> {
    return (
      <header>
        <HeaderDelivery />
        <HeaderContent />
      </header>
    )
}

export default Header
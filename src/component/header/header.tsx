import React from 'react';
import './header.css'
import HeaderContent from '../HeaderContent/headerContent';
import HeaderDelivery from '../HeaderDelivery/headerDelivery';

const Header = ()=> {
    return (
      <header>
        <HeaderDelivery />
        <HeaderContent />
      </header>
    )
}

export default Header;
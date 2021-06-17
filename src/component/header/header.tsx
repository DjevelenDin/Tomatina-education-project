import React, { Component } from 'react';
import './header.css'
import HeaderContent from './../headerContent/headerContent';
import HeaderDelivery from './../headerDelivery/headerDelivery';

export default class Header extends Component {
  render() {
    return (
      <header>
        <HeaderDelivery />
        <HeaderContent />
      </header>
    )
  }
}
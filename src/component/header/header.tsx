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


// fetch("https://world.openfoodfacts.org/api/v0/product/737628064502.json")
// .then(response => {
// 	return response.json()
// })
// .then(body =>{
//   console.log(body)
// })
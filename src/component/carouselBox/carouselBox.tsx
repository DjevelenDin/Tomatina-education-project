import React, {Component} from 'react';
import './carouselBox.css';
import headerImageBackground from '../../assets/headerImageBackground.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
           <img src={headerImageBackground}/>
          )
    }
}
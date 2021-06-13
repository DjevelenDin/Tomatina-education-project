import React, {Component} from 'react';
import './headerImageBar.css';
import CarouselBox from '../carouselBox/carouselBox';

export default class HeaderImageBar extends Component{
    render(){
        return(
            <div className="app-header-image-bar">
            <div className="app-header-image-bar-content">
              <p><span>Найсалатніша</span> доставка у будь-який куточок Львова та передмістя</p>
              <button>Детальніше</button>
            </div>
            <div className="header-image-bar-carousel">
            <CarouselBox />
            </div>
          </div>
        )
    }
}
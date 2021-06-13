import React, {Component} from 'react'
import './headerDelivery.css';

export default class HeaderDelivery extends Component{
    render(){
        return(
            <div className="app-header-delivery">
            <p>Ваш тип доставки:</p>
            <span>Самовивіз</span>
            <li>Натисніть тут щоб змінити</li>
          </div>
        )
    }
}
import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="app-footer">
                    <div className="app-footer-block">
                        <span>Вакансії</span>
                    </div>
                    <div className="app-footer-block">
                        <span>Договір Оферта</span>
                    </div>
                    <div className="app-footer-block app-footer-block-map">
                        <div >
                            <a className="icons-heart" ><svg className="bg" width="47" height="45" viewBox="0 0 47 45" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M45.2083 18.1669L45.2084 18.167C46.7906 22.9887 47.0613 28.4122 45.2187 33.0569C42.3923 40.1815 34.8975 44.3582 27.6059 44.4963C21.8566 44.6044 14.3579 42.3387 8.69888 38.1334C3.05046 33.9361 -0.68529 27.8778 0.845276 20.378C2.16342 13.9239 7.85576 7.82595 13.0413 4.37013C19.7859 -0.122065 26.5525 -0.480618 32.2513 2.14746C37.9685 4.78402 42.6817 10.4605 45.2083 18.1669Z" stroke="#518B26"></path> </svg>
                                <i className="fas fa-map-marker-alt"></i></a>
                        </div>
                        <div className="app-footer-map">
                            <p>м.Львів</p>
                            <p className="app-footer-map-span">ТРЦ Victoria Gardens, Кульпарківська 226 А ТРЦ Spartak, Мазепи 1Б</p>
                            <p>с. Сокільники</p>
                            <p className="app-footer-map-span">ТРЦ King Cross, Стрийська 30</p>
                        </div>
                    </div>
                    <div className="app-footer-block app-footer-block-column">
                        <div className="app-footer-flex">
                            <a className="icons-heart icons-margin" ><svg className="bg" width="47" height="45" viewBox="0 0 47 45" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M45.2083 18.1669L45.2084 18.167C46.7906 22.9887 47.0613 28.4122 45.2187 33.0569C42.3923 40.1815 34.8975 44.3582 27.6059 44.4963C21.8566 44.6044 14.3579 42.3387 8.69888 38.1334C3.05046 33.9361 -0.68529 27.8778 0.845276 20.378C2.16342 13.9239 7.85576 7.82595 13.0413 4.37013C19.7859 -0.122065 26.5525 -0.480618 32.2513 2.14746C37.9685 4.78402 42.6817 10.4605 45.2083 18.1669Z" stroke="#518B26"></path> </svg>
                                <i className="fas fa-mobile-alt"></i> </a>
                            <a>+38 (067) 792 90 90</a>
                        </div>
                        <div className="app-footer-flex">
                            <a className="icons-heart icons-margin" ><svg className="bg" width="47" height="45" viewBox="0 0 47 45" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M45.2083 18.1669L45.2084 18.167C46.7906 22.9887 47.0613 28.4122 45.2187 33.0569C42.3923 40.1815 34.8975 44.3582 27.6059 44.4963C21.8566 44.6044 14.3579 42.3387 8.69888 38.1334C3.05046 33.9361 -0.68529 27.8778 0.845276 20.378C2.16342 13.9239 7.85576 7.82595 13.0413 4.37013C19.7859 -0.122065 26.5525 -0.480618 32.2513 2.14746C37.9685 4.78402 42.6817 10.4605 45.2083 18.1669Z" stroke="#518B26"></path> </svg>
                                <i className="far fa-clock"></i> </a>
                            <span>Пн - Нд з 08:30 до 22:00 </span>
                            <span></span>
                        </div>
                    </div>
                    <div className="app-footer-block app-footer-block-line">
                        <span>Слідкуй за нами</span>
                        <a className="icons-heart icons-margin" ><svg className="bg" width="47" height="45" viewBox="0 0 47 45" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M45.2083 18.1669L45.2084 18.167C46.7906 22.9887 47.0613 28.4122 45.2187 33.0569C42.3923 40.1815 34.8975 44.3582 27.6059 44.4963C21.8566 44.6044 14.3579 42.3387 8.69888 38.1334C3.05046 33.9361 -0.68529 27.8778 0.845276 20.378C2.16342 13.9239 7.85576 7.82595 13.0413 4.37013C19.7859 -0.122065 26.5525 -0.480618 32.2513 2.14746C37.9685 4.78402 42.6817 10.4605 45.2083 18.1669Z" stroke="#518B26"></path> </svg>
                            <i className="fab fa-facebook-f"></i> </a>
                        <a className="icons-heart icons-margin" ><svg className="bg" width="47" height="45" viewBox="0 0 47 45" fill="none" xmlns="http://www.w3.org/2000/svg"> <defs> <linearGradient id="myGradient" gradientTransform="rotate(90)"> <stop offset="12.22%" stop-color="#505FD1"></stop> <stop offset="35.67%" stop-color="#CF2D93"></stop> <stop offset="61.16%" stop-color="#F66635"></stop> <stop offset="85.56%" stop-color="#FED16E"></stop> </linearGradient> </defs> <path d="M45.2083 18.1669L45.2084 18.167C46.7906 22.9887 47.0613 28.4122 45.2187 33.0569C42.3923 40.1815 34.8975 44.3582 27.6059 44.4963C21.8566 44.6044 14.3579 42.3387 8.69888 38.1334C3.05046 33.9361 -0.68529 27.8778 0.845276 20.378C2.16342 13.9239 7.85576 7.82595 13.0413 4.37013C19.7859 -0.122065 26.5525 -0.480618 32.2513 2.14746C37.9685 4.78402 42.6817 10.4605 45.2083 18.1669Z" stroke=""></path> </svg>
                            <i className="fab fa-instagram"></i> </a>
                    </div>
                </div>
            </footer>
        )
    }
}
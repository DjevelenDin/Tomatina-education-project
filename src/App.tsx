import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import server from "../src/restApi/server";

import { withFoodService } from "./component/Hoc-helpers";
import Header from "./component/Header/header";
import Home from "./component/Pages/home";
import Footer from "./component/Footer/footer";
import myAccount from "./component/MyAccount/myAccount";
import { Menu } from "./component/Pages/menu";
import Response from "./component/Pages/response";
import LogIn from "./component/Login/LoginForm/loginForm";

import DeliveryArea from "./component/DeliveryArea/deliveryArea";
import Breakfast from "./component/Pages/breakfast";
import Dessert from "./component/Pages/dessert";
import Drinks from "./component/Pages/drinks";
import FitSandwich from "./component/Pages/fitSandwich";
import Salad from "./component/Pages/salad";
import SaladPasta from "./component/Pages/saladPasta";
import Soups from "./component/Pages/soups";
import Basket from "./component/Basket/basket";
import Comment from "./component/Comment/comment";
// import BasketOrder from "./component/cart/basket_order"

import TemporaryDrawer from "./component/Sidebar/sidebar";
import MainPage from "./component/MainPage/mainPage";
import Cart from "./component/Cart/cart";
import Vacancies from "./component/Vacancies/vacancies";
import Oferta from "./component/Oferta/oferta";
import Contacts from "./component/Contacts/contacts";
import About from "./component/About/about";

import { useTranslation } from "react-i18next";


// interface IAppProps {
//   foodService?: any;
// }

// const { foodService } = this.props;
// console.log(foodService)
// foodService?.getProductsList();

const App = () => {
  const { t, i18n } = useTranslation();

  const handleClick = (lang: any) => {
    console.log('okkk');
    console.log(lang);
    i18n.changeLanguage(lang);  

  };

  return (
    <>
      <div className="container">
        <BrowserRouter>
          <div className="app">
            <Header />


            <div className="app-main-section">
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/menu" exact component={Menu} />
                <Route path="/menu/breakfast" component={Breakfast} />
                <Route path="/menu/dessert" component={Dessert} />
                <Route path="/menu/drinks" component={Drinks} />
                <Route path="/menu/fitSandwich" component={FitSandwich} />
                <Route path="/menu/salad" component={Salad} />
                <Route path="/menu/saladPizza" component={SaladPasta} />
                <Route path="/menu/soups" component={Soups} />
                <Route path="/delivery" component={DeliveryArea} />
                <Route path="/response" component={Response} />
                <Route path="/logIn" component={LogIn} />
                <Route path="/sidebar" component={TemporaryDrawer} />
                <Route path="/mainPage" component={MainPage} />
                <Route path="/basket" component={Basket} />
                <Route path="/buy" component={Cart} />
                <Route path="/vacancies" component={Vacancies} />
                <Route path="/oferta" component={Oferta} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/about" component={About} />
                <Route path="/myAccount" component={myAccount} />
                <Route path="/comment" component={Comment} />
              </Switch>
            </div>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default withFoodService()(App);

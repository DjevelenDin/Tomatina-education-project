import React from "react"
import "./contacts.css"
import Contact from "./contact/contact"

const Contacts = ()=>{
    return <div className="contacts-conteiner">
        <h1>Наші <span className="contactGreen">контакти</span></h1>
        <Contact/>
    </div>
}
export default Contacts
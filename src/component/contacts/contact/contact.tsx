import React from "react";
import "./contact.css";

interface DataInfos {
  name:string,
      city: string,
    street: string,
  email: string,
phone: string,
clock: string
}
const Contact = () => {
  const dateInfo:DataInfos[] = [
    {name: `ТРЦ "King Cross Leopolis"`,
      city: "с. Сокільники",
    street: "Вул. Стрийська, 30",
  email: "service@tomatina.ua",
phone: "+38 (096) 195 03 87",
clock: "Пн - Нд з 10:00 до 22:00"
}, 
 {name: `ТРЦ "Вікторія Гарденс"`,
city: "м. Львів",
street: "Вул. Кульпарківська, 226 А",
email: "service@tomatina.ua",
phone: "+38 (067) 109 51 91",
clock: "Пн - Нд з 10:00 до 22:00"
},
 {name: `ТРЦ "СПАРТАК"`,
city: "м. Львів",
street: "Вул. Мазепи, 1Б",
email: "service@tomatina.ua",
phone: "+38 (067) 884 46 85",
clock: "Пн - Нд з 10:00 до 22:00"
}, 
{name: `ТРЦ "Forum Lviv"`,
city: "м. Львів",
street: "Вул. Під Дубом, 7Б",
email: "service@tomatina.ua",
phone: "+38 (067) 277 06 02",
clock: "Пн - Нд з 10:00 до 22:00"
}
  ]
  return (
    <div className="big-container-contact">
      {dateInfo.map((item:DataInfos)=>{
        return (
          <div className="contact-components">
          <h4 className="contact-name">{item.name}</h4>
      <div className="contact-components-context">
        <div className="icons-plus-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-geo-alt icons-heart icons-green"
            viewBox="0 0 16 16"
          >
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
          <div className="adderess">
            <p className="text-contact">{item.city}</p>
            <p className="text-contact-gray">{item.street}</p>
          </div>
        </div>
        <div className="icons-plus-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-envelope icons-heart icons-green"
            viewBox="0 0 16 16"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
          </svg>
          <p  className="text-contact">{item.email}</p>
        </div>
        <div className="icons-plus-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-phone icons-heart icons-green"
            viewBox="0 0 16 16"
          >
            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
          <p  className="text-contact">{item.phone}</p>
        </div>
        <div className="icons-plus-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-clock icons-heart icons-green"
            viewBox="0 0 16 16"
          >
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
          </svg>
          <p  className="text-contact">{item.clock}</p>
        </div>
      </div>
      </div>
        )
      })}  
       
    </div>
  );
};

export default Contact;

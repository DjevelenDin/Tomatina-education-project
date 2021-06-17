import React from "react";
import "./map.css";

export default class Map extends React.Component {
  render() {
    return (
      <>
        <div className="mainMap">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=11lozd8MvTw-zopkt3lNBOzeUSxtCe7ZG"
            width="640"
            height="480"
          ></iframe>
        </div>
      </>
    );
  }
}

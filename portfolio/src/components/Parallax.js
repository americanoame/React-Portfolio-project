import React from "react";
import "../App.css";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const AndreProfolio = () => {
  return (
    <div>
      <Parallax pages={3} style={{backgroundImage: "../public/img/parallax.jpg"}}>
      
        <Parallax offset={0} 
        className="center"
        style={{backgroundImage: "../public/img/parallax.jpg"}}
        >
          <div> Page 1</div>
        </Parallax>
        <Parallax offset={1} className="center"
        style={{backgroundImage: "../public/img/parallax.jpg"}}
        >

          <div> Page 2</div>
        </Parallax>
        <Parallax offset={2} className="center"
        style={{backgroundImage: "../public/img/parallax.jpg"}}
        >
          <div> Page 3</div>
        </Parallax>  
      </Parallax>
    </div>
  );
};

export default AndreProfolio;

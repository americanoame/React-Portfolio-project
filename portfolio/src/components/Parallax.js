import React from "react";
import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Parallax = () => {
  return (
    <div>
      <Parallax pages={3} style={{backgroundImage: "../public/img/main-photo.jpg"}}>
        <Parallax offset={0} className="center">
          <div> Page 1</div>

        </Parallax>
        <Parallax offset={1} className="center">
          <div> Page 2</div>

        </Parallax>
        <Parallax offset={2} className="center">
          <div> Page 3</div>
        </Parallax>
          
      </Parallax>
    </div>
  );
};

export default Parallax;

import React from "react";
import style from "./Feature.module.css";
import { BsGrid } from "react-icons/bs";
import Card from "../Card/Card";

function Feature() {
  return (
    <div className={style.feature}>
      
      <div>
        <span>
          {" "}
          <BsGrid size={17} /> Core Features
        </span>
        <p>Printing Facilities Demandable Core Features</p>

        <div>
          <p>
            <span style={{ color: "#54cf9e", fontSize: "1.5rem" }}>10M+</span>
            Finished Works
          </p>
          <p>
            <span style={{ color: "#c5717d", fontSize: "1.5rem" }}>10M+</span>
            Finished Works
          </p>
        </div>
      </div>

      <div>



      <Card/>


      
      



      </div>
      
    </div>
  );
}

export default Feature;

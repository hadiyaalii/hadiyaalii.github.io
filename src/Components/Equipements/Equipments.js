import React from "react";
import One from "../../assets/Equipements/Equipement1.jpeg";
import Two from "../../assets/Equipements/Equipement2.jpeg";
import Three from "../../assets/Equipements/Equipement3.jpeg";
import Four from "../../assets/Equipements/Equipement4.jpeg";
import Five from "../../assets/Equipements/Equipement5.webp";
import Six from "../../assets/Equipements/Equipement6.jpeg";
import Seven from "../../assets/Equipements/Equipement7.jpeg";
import Eight from "../../assets/Equipements/Equipement8.webp";
import Nine from "../../assets/Equipements/Equipement9.jpg";
import Ten from "../../assets/Equipements/Equipement10.jpg";
import Eleven from "../../assets/Equipements/Equipement11.jpg";
import css from "./Equipments.module.css";

function Equipments() {
  return (
    <div>
      <section>
        <div className={css.items}>
          <div className={`${css.item} ${css.item1}`}>
            <img src={One} />
          </div>
          <div className={`${css.item} ${css.item1}`}>
            <img src={Two} />
          </div>
          <div className={`${css.item} ${css.item1}`}>
            <img src={Three} />
          </div>
          <div className={`${css.item} ${css.item1}`}>
            <img src={Four} />
          </div>
          <div className={`${css.item} ${css.item1}`}>
            <img src={Five} />
          </div>
          <div className={`${css.item} ${css.item1}`}>
            <img src={Six} />
          </div>
          <div className={`${css.item} ${css.item1}`}>
            <img src={Seven} />
          </div>
          <div className={`${css.item} ${css.item1}`}>
            <img src={Eight} />
          </div>
          <div className={`${css.item} ${css.item1}`}>
            <img src={Nine} />
          </div>
          <div className={`${css.item} ${css.item1}`}>
            <img src={Ten} />
          </div>
          <div className={`${css.item} ${css.item1}`}>
            <img src={Eleven} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Equipments;

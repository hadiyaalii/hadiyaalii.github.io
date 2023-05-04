import React from "react";
import One from "../../assets/Food/Food1.png";
import Two from "../../assets/Food/Food2.png";
import Three from "../../assets/Food/Food3.png";
import Four from "../../assets/Food/Food4.png";
import Five from "../../assets/Food/Food5.jpg";
import Six from "../../assets/Food/Food6.jpg";
import Seven from "../../assets/Food/Food7.jpg";
import Eight from "../../assets/Food/Food8.png";
import Nine from "../../assets/Food/Food9.png";
import Ten from "../../assets/Food/Food10.png";

import css from "./Food.module.css";

function Food() {
  return (
    <div>
      <section>
        <div className={css.items}>
          <div className={`${css.item} ${css.item1}`}>
            <img src={One} />
          </div>
          <div className={`${css.item} ${css.item2}`}>
            <img src={Two} />
          </div>
          <div className={`${css.item} ${css.item3}`}>
            <img src={Three} />
          </div>
          <div className={`${css.item} ${css.item4}`}>
            <img src={Four} />
          </div>
          <div className={`${css.item} ${css.item5}`}>
            <img src={Five} />
          </div>
          <div className={`${css.item} ${css.item6}`}>
            <img src={Six} />
          </div>
          <div className={`${css.item} ${css.item7}`}>
            <img src={Seven} />
          </div>
          <div className={`${css.item} ${css.item8}`}>
            <img src={Eight} />
          </div>
          <div className={`${css.item} ${css.item9}`}>
            <img src={Nine} />
          </div>
          <div className={`${css.item} ${css.item10}`}>
            <img src={Ten} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Food;

import React from "react";
import One from "../../assets/Products/Products1.jpg";
import Two from "../../assets/Products/Products2.jpg";
import Three from "../../assets/Products/Products3.jpg";
import Four from "../../assets/Products/Products4.png";
import Five from "../../assets/Products/Products5.png";
import Six from "../../assets/Products/Products6.png";
import Seven from "../../assets/Products/Products7.png";
import Eight from "../../assets/Products/Products8.png";
import Nine from "../../assets/Products/Products9.png";
import Ten from "../../assets/Products/Products10.png";
import Eleven from "../../assets/Products/Products11.png";
import Twelve from "../../assets/Products/Products12.jpg";
import Thirteen from "../../assets/Products/Products13.jpg";
import Fourteen from "../../assets/Products/Products14.png";

import css from "./Products.module.css";

function Products() {
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
          <div className={`${css.item} ${css.item11}`}>
            <img src={Eleven} />
          </div>
          <div className={`${css.item} ${css.item12}`}>
            <img src={Twelve} />
          </div>
          <div className={`${css.item} ${css.item13}`}>
            <img src={Thirteen} />
          </div>
          <div className={`${css.item} ${css.item14}`}>
            <img src={Fourteen} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;

import React, { useRef, useEffect, useState } from "react";
import One from "../../assets/Portraits/Portrait1.png";
import Two from "../../assets/Portraits/Portrait2.png";
import Three from "../../assets/Portraits/Portrait3.jpg";
import Four from "../../assets/Portraits/Portrait4.jpg";
import Five from "../../assets/Portraits/Portrait5.jpg";
import Six from "../../assets/Portraits/Portrait6.jpg";
import Seven from "../../assets/Portraits/Portrait7.jpg";
import Eight from "../../assets/Portraits/Portrait8.jpg";
import Nine from "../../assets/Portraits/Portrait9.jpg";
import Ten from "../../assets/Portraits/Portrait10.jpg";
import Eleven from "../../assets/Portraits/Portrait11.jpg";
import Twelve from "../../assets/Portraits/Portrait12.jpg";
import Thirteen from "../../assets/Portraits/Portrait13.jpg";
import Fourteen from "../../assets/Portraits/Portrait14.png";
import Fifteen from "../../assets/Portraits/Portrait15.png";
import Sixteen from "../../assets/Portraits/Portrait16.jpg";
import Seventeen from "../../assets/Portraits/Portrait17.png";
import Eighteen from "../../assets/Portraits/Portrait18.jpg";
import Nineteen from "../../assets/Portraits/Portraits19.JPG";
import Twenty from "../../assets/Portraits/Portraits20.jpg";
import TwentyOne from "../../assets/Portraits/Portraits21.JPG";
import TwentyTwo from "../../assets/Portraits/Portraits22.JPG";
import TwentyThree from "../../assets/Portraits/Party1.png.PNG";
import TwentyFour from "../../assets/Portraits/Party2.png.PNG";
import TwentyFive from "../../assets/Portraits/Party3.png.PNG";
import TwentySix from "../../assets/Portraits/Party4.png.PNG";
import TwentySeven from "../../assets/Portraits/Party5.png.PNG";

import css from "./Home.module.css";

function Home() {
  return (
    <section>
      <div className={css.items}>
        <div className={`${css.item} ${css.item2}`}>
          <img src={Two} />
        </div>
        <div className={`${css.item} ${css.item7}`}>
          <img src={TwentyOne} />
        </div>
        <div className={`${css.item} ${css.item18}`}>
          <img src={TwentySeven} />
        </div>
        <div className={`${css.item} ${css.item14}`}>
          <img src={Fourteen} />
        </div>
        <div className={`${css.item} ${css.item1}`}>
          <img src={One} />
        </div>

        <div className={`${css.item} ${css.item3}`}>
          <img src={Three} />
        </div>
        <div className={`${css.item} ${css.item4}`}>
          <img src={Four} />
        </div>
        <div className={`${css.item} ${css.item18}`}>
          <img src={TwentySix} />
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
        <div className={`${css.item} ${css.item7}`}>
          <img src={Twenty} />
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
        <div className={`${css.item} ${css.item10}`}>
          <img src={TwentyTwo} />
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

        <div className={`${css.item} ${css.item15}`}>
          <img src={Fifteen} />
        </div>
        <div className={`${css.item} ${css.item15}`}>
          <img src={Nineteen} />
        </div>
        <div className={`${css.item} ${css.item16}`}>
          <img src={Sixteen} />
        </div>
        <div className={`${css.item} ${css.item17}`}>
          <img src={Seventeen} />
        </div>
        <div className={`${css.item} ${css.item18}`}>
          <img src={Eighteen} />
        </div>
        <div className={`${css.item} ${css.item18}`}>
          <img src={TwentyThree} />
        </div>
        <div className={`${css.item} ${css.item18}`}>
          <img src={TwentyFour} />
        </div>
        <div className={`${css.item} ${css.item18}`}>
          <img src={TwentyFive} />
        </div>
      </div>
    </section>
  );
}

export default Home;

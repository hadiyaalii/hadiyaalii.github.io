import React, { useEffect } from "react";
import "./Testimonials.css";
import { Box, Text, Image } from "@chakra-ui/react";
import Hadiya from "../../assets/Food/Food1.png";
import Quddos from "../../assets/Testimonials/saoudi.jpeg";
import Noora from "../../assets/Testimonials/Noora.png";
import Surkhab from "../../assets/Testimonials/Surkhab.jpeg";
import Thalmeez from "../../assets/Testimonials/Thalmeez.JPG";
import Akshaya from "../../assets/Testimonials/Akshaya.jpeg";
import Logy from "../../assets/Testimonials/Logy.jpg";
import Sibghat from "../../assets/Testimonials/Sibghat.PNG";

import Swiper from "swiper/bundle";
import "swiper/css/bundle";

function Testimonials() {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      autoHeight: true,
      loop: true,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);
  return (
    <div>
      <div id="page" className="site">
        <div className="container">
          <div className="testi">
            <div className="head">
              <h3>Testimonials</h3>
              <p>Kind words from clients</p>
            </div>
            <div className="body swiper">
              <ul className="swiper-wrapper">
                <li className="swiper-slide">
                  <div className="wrapper">
                    <div className="thumbnail">
                      <img src={Akshaya} />
                    </div>
                    <div className="aside">
                      <p>
                        It’s such a satisfaction when I see images like I hoped
                        it to be and these are even better. These are beautiful.
                        You sure are going great heights!
                      </p>
                      <div className="name">
                        <h4>Akshaya</h4>
                        <p>Client</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="swiper-slide">
                  <div className="wrapper">
                    <div className="thumbnail">
                      <img src={Quddos} />
                    </div>
                    <div className="aside">
                      <p>
                        Working with Hadiya has been an absolute pleasure. She
                        is not only talented and experienced but also incredibly
                        humble and easy to work with. Her passion for
                        photography and videography truly shines through in her
                        work.
                      </p>
                      <div className="name">
                        <h4>Sohayb Saoudi</h4>
                        <p>Model</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="swiper-slide">
                  <div className="wrapper">
                    <div className="thumbnail">
                      <img src={Noora} />
                    </div>
                    <div className="aside">
                      <p>
                        I need 5 business days to process such amazing outcome
                        of your work. I’m so freakin’ happy to choose you as our
                        event photographer without hesitation.
                      </p>
                      <div className="name">
                        <h4>Noora</h4>
                        <p>Client</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="swiper-slide">
                  <div className="wrapper">
                    <div className="thumbnail">
                      <img src={Surkhab} />
                    </div>
                    <div className="aside">
                      <p>
                        You turn everything to magic. Every work I give you
                        thinking this is a hopeless case and this is what you do
                        with it!
                      </p>
                      <div className="name">
                        <h4>Surkhab</h4>
                        <p>CEO & Co-Founder</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="swiper-slide">
                  <div className="wrapper">
                    <div className="thumbnail">
                      <img src={Thalmeez} />
                    </div>
                    <div className="aside">
                      <p>
                        Your work is GOLD. I knew it from the day I saw your
                        page that your work would be the best for my songs.
                      </p>
                      <div className="name">
                        <h4>Thalmeez</h4>
                        <p>Colleague</p>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="swiper-slide">
                  <div className="wrapper">
                    <div className="thumbnail">
                      <img src={Sibghat} />
                    </div>
                    <div className="aside">
                      <p>
                        You are an exceptionally good event photographer. I have
                        observed you during events. I always consider the basic
                        rule for event photography to be how well the
                        photographer can adjust him/herself without disturbing
                        the audience of the even and I have seen that in you,
                        out of the many other field related skills
                      </p>
                      <div className="name">
                        <h4>Sibghat Mirza</h4>
                        <p>Client</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="swiper-slide">
                  <div className="wrapper">
                    <div className="thumbnail">
                      <img src={Logy} />
                    </div>
                    <div className="aside">
                      <p>
                        Oh my God! I love you because the pictures are perfect
                        and I am in love!
                      </p>
                      <div className="name">
                        <h4>Logy</h4>
                        <p>Client</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="swiper-pagination"></div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

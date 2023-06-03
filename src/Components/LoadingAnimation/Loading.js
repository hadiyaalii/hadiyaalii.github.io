import React, { useState, useEffect } from "react";
import css from "./Loading.module.css";
import BarLoader from "react-spinners/BarLoader";
import TypewriterComponent from "typewriter-effect";

function Loading() {
  const [loading, setLoading] = useState(true);
  const [barWidth, setBarWidth] = useState(150);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setBarWidth(150);
      }, 7000);
    }, 8000);
    setTimeout(() => {
      setBarWidth(window.innerWidth);
    }, 7400);
  }, []);
  return (
    <>
      <p className={css.introName}>
        <TypewriterComponent
          onInit={(typewriter) => {
            typewriter
              .changeDelay(75)
              .changeDeleteSpeed(75)
              .typeString("Hadiya Ali")
              .changeDelay(75)
              .changeDeleteSpeed(75)
              .deleteAll()
              .typeString("哈迪亚阿里")
              .pauseFor(1000)
              .deleteAll()
              .changeDelay(75)
              .changeDeleteSpeed(75)
              .typeString("하디야 알리")
              .changeDelay(75)
              .changeDeleteSpeed(75)
              .pauseFor(1000)
              .deleteAll()
              .typeString("هدية علي")
              .start();
          }}
        />
      </p>
      <BarLoader
        color="#000"
        cssOverride={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          transition: "width 0.5s ease-out",
        }}
        speedMultiplier={1.2}
        width={barWidth}
        loading={true}
        height={1}
      />
    </>
  );
}

export default Loading;

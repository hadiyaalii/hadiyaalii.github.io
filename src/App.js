import React, { useEffect, useState, useCallback } from "react";
import css from "./App.module.css";
import BarLoader from "react-spinners/BarLoader";
import TypewriterComponent from "typewriter-effect";
import Loading from "./Components/LoadingAnimation/Loading";
import Main from "./Container/Main/Main";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 8000);
  }, []);

  return <div>{isLoading ? <Loading /> : <Main isLoading={isLoading} />}</div>;
}

export default App;

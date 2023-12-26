import { useState } from "react";

import styles from "./Home.module.css";

import { Sponsors } from "../../components";
import { Button, Input } from "../../components";
import About from "../../components/About/About";

const Home = () => {
  const [demoState, setDemoState] = useState("");

  const changeDemoState = (e) => {
    setDemoState(e.target.value);
  };

  return (
    <>
    <div>
      <Sponsors/>
    </div>
    <About/>
    </>
  );
};

export default Home;

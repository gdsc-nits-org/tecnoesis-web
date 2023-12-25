import { useState } from "react";

import styles from "./Home.module.css";

import { Button, Input } from "../../components";
import Herosection from "../../components/Herosection/Herosection";

const Home = () => {
  const [demoState, setDemoState] = useState("");

  const changeDemoState = (e) => {
    setDemoState(e.target.value);
  };

  return (
    <>
      <Herosection />
    </>
  );
};

export default Home;

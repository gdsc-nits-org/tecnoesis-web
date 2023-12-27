import { useState } from "react";

import styles from "./Home.module.css";

import { Sponsors } from "../../components";
import { Button, Input } from "../../components";

import Hero from "../../components/Hero/Hero";

const Home = () => {
  const [demoState, setDemoState] = useState("");

  const changeDemoState = (e) => {
    setDemoState(e.target.value);
  };

  return (
    <>
      <Hero />
    </>
  );
};

export default Home;

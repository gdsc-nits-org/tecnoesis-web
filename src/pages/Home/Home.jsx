import { useState } from "react";

import styles from "./Home.module.css";

import { Button, Input, Sponsors, About } from "../../components";

import Hero from "../../components/Hero/Hero";

const Home = () => {
  const [demoState, setDemoState] = useState("");

  const changeDemoState = (e) => {
    setDemoState(e.target.value);
  };

  return (
    <>
      <Hero />
      <About/>
      <Sponsors/>
    </>
  );
};

export default Home;

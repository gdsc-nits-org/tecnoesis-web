import { useState } from "react";

import styles from "./Home.module.css";

import { Button, Input } from "../../components";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  const [demoState, setDemoState] = useState("");

  const changeDemoState = (e) => {
    setDemoState(e.target.value);
  };

  return (
    <div>
      <Navbar/>
      <h1 className={styles["heading"]}>Tecnoesis 2024</h1>
      <Input value={demoState} onChange={changeDemoState} />
      <Button>Hello</Button>
    </div>
  );
};

export default Home;

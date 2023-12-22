import { useState } from "react";

import styles from "./Home.module.css";

import { Sponsors } from "../../components";

const Home = () => {
  const [demoState, setDemoState] = useState("");

  const changeDemoState = (e) => {
    setDemoState(e.target.value);
  };

  return (
    <div>
      <Sponsors/>
    </div>
  );
};

export default Home;

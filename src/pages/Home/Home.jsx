import { useState } from "react";
import { Hero, Sponsors, About, Loading } from "../../components";
import { useEffect } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Hero />
      <About />
      <Sponsors />
    </>
  );
};

export default Home;

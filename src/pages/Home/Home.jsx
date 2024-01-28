import { useState } from "react";
import { Hero, Sponsors, About, Loading, Navbar2, Footer } from "../../components";
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
      <Navbar2/>
      <Hero />
      <About />
      <Sponsors />
      <Footer/>
    </>
  );
};

export default Home;

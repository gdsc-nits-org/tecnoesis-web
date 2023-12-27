import { Home, Error } from "./pages";

import { Routes, Route } from "react-router-dom";

import "./App.css";
// const LazyHero = React.lazy(()=> import("../src/components/Hero/Hero"));


function App() {

  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
      {/* <Route path="hero" element={<LazyHero />} /> */}
    </Routes>
  )
}

export default App;

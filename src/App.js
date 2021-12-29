// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Rellax from "rellax";
import React, { useEffect } from "react";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Homepage from "./views/Homepage";


function App() {

  /*
  useEffect(() => {
    const rellax = new Rellax('.rellax', {
      center: false,
    });
  });
  */

  return (
    <div className="min-h-screen">
      <Navigation />
      <Homepage />
      <Footer />


      {/* <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Homepage />
        </Routes>

        <Footer />
      </BrowserRouter> */}
    </div>
  )
}

export default App;

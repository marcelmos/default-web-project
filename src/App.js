import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Homepage from "./views/Homepage";
import FAQ from "./views/FAQ";

function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="faq" element={<FAQ />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

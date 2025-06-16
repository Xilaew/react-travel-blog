import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { Contact } from "./pages/Contact";
import { About } from "./pages/About";

export function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
    
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

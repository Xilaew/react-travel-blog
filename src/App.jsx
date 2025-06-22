import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { Contact } from "./pages/Contact";
import { About } from "./pages/About";

import { LogInPage } from "./pages/LoginPage";
import { Register } from "./pages/Register";
import { CityDetail } from "./components/CityDetail";
import { CityList } from "./components/CityList";
import { NewPostForm } from "./components/NewPostForm";

export function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/newpostform" element={<NewPostForm />}></Route>
        <Route path={"/logInPage"} element={<LogInPage />} />
        <Route path={"/register"} element={<Register />} />
        <Route path="/" element={<CityList />} />
        <Route path="/city/:id" element={<CityDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

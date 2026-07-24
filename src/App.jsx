import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WelcomeScreen from "./components/WelcomeScreen";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FeatureDetail from "./pages/FeatureDetail";

export default function App() {
  const [entered, setEntered] = useState(false);

  if (!entered) {
    return <WelcomeScreen onEnter={() => setEntered(true)} />;
  }

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feature/:id" element={<FeatureDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

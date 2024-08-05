import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Frame } from "./components/Frame";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contacto } from "./pages/Contacto";
import { Services } from "./pages/Services";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Frame />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacto" element={<Contacto />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

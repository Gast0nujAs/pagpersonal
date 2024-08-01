import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Frame } from "./components/Frame";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Frame />} />
        <Route path="/nosotros" element={<Frame />} />
        <Route path="/condiciones" element={<Frame />} />
        <Route path="/desenvolver" element={<Frame />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Nosotros } from "./components/Nosotros";
import { Footer } from "./components/Footer";
import { Habilidades } from "./components/Habilidades";
import { Condiciones } from "./components/Condiciones";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Nosotros />
      <Condiciones />
      <Habilidades />
      
      <Footer />

    </div>
  );
}

export default App;

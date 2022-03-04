import "./styles/App.css";
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/Typography.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Accommodation from "./pages/Accommodation";
import data from "./data.json";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <header>
        <Navigation />
      </header>
      <main className="app__main">
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/about" element={<About />} />

          <Route
            path="/accommodation/:id"
            element={<Accommodation data={data} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

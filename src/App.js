import './App.css';
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'

import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
          <Routes>
            <Route path="/kasa" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Error />} />
          </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

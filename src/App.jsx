import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ManagedIT from './pages/ManagedIT';
import Security from './pages/Security';

function App() {
  return (
    <div className="app-shell">
      <Router>
        <header className="topbar">
          <div className="brand">
            <Link to="/">
              <img src="assets/logo.svg" alt="Tech Mountain" />
            </Link>
          </div>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/managed-it">Managed IT</Link>
            <Link to="/security">Security</Link>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/managed-it" element={<ManagedIT />} />
          <Route path="/security" element={<Security />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

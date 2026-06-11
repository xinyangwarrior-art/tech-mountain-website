import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import ManagedIT from './pages/ManagedIT';
import Security from './pages/Security';
import logo from '/assets/logo.svg';

function App() {
  function ScrollToHash() {
    const location = useLocation();
    useEffect(() => {
      if (location.hash) {
        const id = location.hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          setTimeout(() => {
            const el2 = document.getElementById(id);
            if (el2) el2.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    }, [location]);
    return null;
  }

  return (
    <div className="app-shell">
      <Router>
        <header className="topbar">
          <div className="brand">
            <Link to="/">
              <img src={logo} alt="Tech Mountain" />
            </Link>
          </div>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/managed-it">Managed IT</Link>
            <Link to="/security">Security</Link>
            <Link to="/#contact">Contact</Link>
          </nav>
        </header>

        <ScrollToHash />

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

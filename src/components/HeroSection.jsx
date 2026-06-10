import { Link } from 'react-router-dom';

function HeroSection({ hero }) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Trusted IT support for your business</p>
        <h1>{hero.title}</h1>
        <p>{hero.subtitle}</p>
        <div className="hero-actions">
          <a className="cta-button" href="#contact">
            {hero.cta}
          </a>
          <Link className="secondary-button" to="/managed-it">
            Explore Managed IT
          </Link>
        </div>
      </div>
      <div className="hero-visual">
        <div className="visual-panel">
          <div>
            <h2>Calm support. Clear outcomes.</h2>
            <p>
              Your technology should be the thing that works, not the thing you
              worry about. Tech Mountain keeps your systems reliable and your
              team moving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

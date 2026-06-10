import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function ManagedIT() {
  return (
    <main className="page-shell">
      <section className="section page-hero">
        <div className="section-copy">
          <p className="eyebrow">Managed IT Services</p>
          <h1>Your outsourced IT department, without the overhead.</h1>
          <p>
            Tech Mountain provides predictable, daily IT support so your team
            can operate with confidence. We manage systems, users, devices, and
            support requests with the consistency your business needs.
          </p>
          <Link className="cta-button" to="/">
            Back to home
          </Link>
        </div>
        <div className="page-visual">
          <img src="assets/managed-it-illustration.svg" alt="Managed IT support illustration" />
        </div>
      </section>

      <section className="section detail-grid">
        <article className="service-card">
          <h2>Support, monitoring, and maintenance</h2>
          <p>
            We handle help desk requests, device management, patching, and
            proactive monitoring so problems are caught before they interrupt
            your operations.
          </p>
        </article>
        <article className="service-card">
          <h2>Business continuity and backups</h2>
          <p>
            We keep your critical systems backed up and recoverable, so your
            data stays protected when a technology issue occurs.
          </p>
        </article>
      </section>

      <section className="section">
        <div className="section-copy">
          <p className="eyebrow">What this means for you</p>
          <h2>Fewer surprises. Faster support. More stability.</h2>
          <p>
            With Tech Mountain, your technology is handled consistently by a
            team that knows your business. That means less downtime and more
            confidence for your staff.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default ManagedIT;

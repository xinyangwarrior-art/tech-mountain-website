import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Security() {
  return (
    <main className="page-shell">
      <section className="section page-hero">
        <div className="section-copy">
          <p className="eyebrow">Security & Monitoring</p>
          <h1>Protect your business from downtime and digital risk.</h1>
          <p>
            Tech Mountain helps keep your systems secure, monitored, and updated
            so your team can work without worry. Our approach is practical,
            consistent, and tailored for small businesses.
          </p>
          <Link className="cta-button" to="/">
            Back to home
          </Link>
        </div>
        <div className="page-visual">
          <img src="/assets/security-illustration.svg" alt="Security monitoring illustration" />
        </div>
      </section>

      <section className="section detail-grid">
        <article className="service-card">
          <h2>Threat detection and response</h2>
          <p>
            We monitor systems for suspicious activity, maintain protection
            tools, and help you respond to issues quickly to reduce risk.
          </p>
        </article>
        <article className="service-card">
          <h2>Updates, patching, and access control</h2>
          <p>
            We keep operating systems, software, and security controls current so
            your environment remains stable and resilient.
          </p>
        </article>
      </section>

      <section className="section">
        <div className="section-copy">
          <p className="eyebrow">Designed for your business</p>
          <h2>Security that fits your team and keeps work moving.</h2>
          <p>
            We take the guesswork out of security by aligning protection with how
            your business works. That means safer systems and fewer interruptions.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Security;

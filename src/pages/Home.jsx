import HeroSection from '../components/HeroSection';
import ServiceCards from '../components/ServiceCards';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { hero, services, why, outcomes, contact } from '../data/content';

function Home() {
  return (
    <main>
      <HeroSection hero={hero} />

      <section className="section intro" id="services">
        <div className="section-copy">
          <p className="eyebrow">Small business IT that just works</p>
          <h2>Dependable support designed for your business.</h2>
          <p>
            We handle your technology so your team can stay productive and
            focused. Our services are built around reliable IT operations,
            security, and clear accountability.
          </p>
        </div>
        <ServiceCards services={services} />
      </section>

      <AboutSection why={why} />

      <section className="section outcomes">
        <div className="section-copy">
          <p className="eyebrow">What you can expect</p>
          <h2>Practical outcomes for your business.</h2>
        </div>
        <div className="outcome-grid">
          {outcomes.map((item) => (
            <article key={item.number} className="outcome-card">
              <div className="outcome-number">{item.number}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <ContactSection contact={contact} />
      <Footer />
    </main>
  );
}

export default Home;

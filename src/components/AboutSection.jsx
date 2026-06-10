function AboutSection({ why }) {
  return (
    <section className="section" id="why">
      <div className="section-copy">
        <p className="eyebrow">Your business IT team, simplified</p>
        <h2>{why.headline}</h2>
        <p>
          Tech Mountain is a calm, experienced IT partner that keeps your
          systems stable while you run your business. We focus on support,
          security, and communication so technology feels manageable.
        </p>
      </div>
      <div className="card-grid">
        {why.points.map((point) => (
          <article key={point} className="service-card">
            <h3>{point}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;

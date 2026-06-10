function ServiceCards({ services }) {
  return (
    <div className="card-grid">
      {services.map((service) => (
        <article key={service.title} className="service-card">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </article>
      ))}
    </div>
  );
}

export default ServiceCards;

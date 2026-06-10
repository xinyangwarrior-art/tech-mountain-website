function ContactForm({ contact }) {
  return (
    <article className="contact-card form-card">
      <p className="eyebrow">Quick lead capture</p>
      <h3>Tell us about your IT needs</h3>
      <form className="lead-form" onSubmit={(event) => event.preventDefault()}>
        <label>
          Business name
          <input type="text" placeholder="Your company name" />
        </label>
        <label>
          Email address
          <input type="email" placeholder="you@company.com" />
        </label>
        <label>
          Phone number
          <input type="tel" placeholder="(303) 555-0123" />
        </label>
        <label>
          What would you like help with?
          <textarea placeholder="Managed IT, security, hosted email, etc."></textarea>
        </label>
        <button type="submit" className="cta-button">
          Submit request
        </button>
      </form>
      <p className="form-note">
        This form is a placeholder. For now, contact us directly at{' '}
        <a href={`mailto:${contact.email}`}>{contact.email}</a> or call{' '}
        <a href={`tel:${contact.phone.replace(/[^\d]/g, '')}`}>{contact.phone}</a>.
      </p>
    </article>
  );
}

export default ContactForm;

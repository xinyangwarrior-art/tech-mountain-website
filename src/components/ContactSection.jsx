import ContactForm from './ContactForm';

function ContactSection({ contact }) {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-copy">
        <p className="eyebrow">Start a conversation</p>
        <h2>{contact.title}</h2>
        <p>{contact.description}</p>
      </div>
      <div className="contact-block">
        <article className="contact-card">
          <div>
            <h3>Call or email</h3>
            <p>
              <strong>Phone:</strong>{' '}
              <a href={`tel:${contact.phone.replace(/[^\d]/g, '')}`}>
                {contact.phone}
              </a>
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </div>
          <div>
            <h3>Visit us</h3>
            <p>{contact.address}</p>
          </div>
        </article>
        <ContactForm contact={contact} />
      </div>
    </section>
  );
}

export default ContactSection;

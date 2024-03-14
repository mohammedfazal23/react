
import React from 'react';

function ContactForm() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;

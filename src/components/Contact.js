
export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Me</h2>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's talk about everything!</h3>
            <p>Have a project in mind? Want to collaborate? Or just want to say hello? Feel free to contact me.</p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon"><i className="fas fa-phone"></i></div>
                <div><h4>Phone</h4><p>+91 9154437671</p></div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                <div><h4>Email</h4><p>mukundaditya2130@gmail.com</p></div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><i className="fab fa-linkedin-in"></i></div>
                <div><h4>LinkedIn</h4><p>linkedin.com/in/p-mukund-aditya6376222a5</p></div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form id="contactForm">
              <div className="form-group"><input type="text" placeholder="Your Name" required /></div>
              <div className="form-group"><input type="email" placeholder="Your Email" required /></div>
              <div className="form-group"><input type="text" placeholder="Subject" /></div>
              <div className="form-group"><textarea placeholder="Your Message" required></textarea></div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

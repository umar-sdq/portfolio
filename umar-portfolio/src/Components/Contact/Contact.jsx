import "./Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page page-fade">

      <div className="luxury-bg"></div>
      <div className="animated-shapes"></div>

      <section className="contact-header">
        <h1>Let's Connect</h1>
        <p className="contact-subtitle">Let’s build something great together.</p>
      </section>

      {/* MAIN CARD */}
      <div className="contact-card">

        {/* EMAIL */}
        <div className="contact-row">
          <FaEnvelope className="contact-icon" />
          <div>
            <a href="mailto:umarsdq06@gmail.com">umarsdq06@gmail.com</a>
          </div>
        </div>

        {/* LINKEDIN */}
        <div className="contact-row">
          <FaLinkedin className="contact-icon" />
          <div>
            <a 
              href="https://www.linkedin.com/in/umar-siddiqui-4914a3222/"
              target="_blank"
            >
              linkedin.com/in/umar-siddiqui
            </a>
          </div>
        </div>

        <div className="contact-row">
          <FaGithub className="contact-icon" />
          <div>
            <a 
              href="https://github.com/umar-sdq"
              target="_blank"
            >
              linkedin.com/in/umar-siddiqui
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="contact-footer">
        © 2025 Umar Siddiqui — All rights reserved
      </footer>

    </div>
  );
};

export default Contact;

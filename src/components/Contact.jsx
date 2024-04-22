
const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Let&lsquo;s connect</h2>
      <div className="contact-form">
        <div className="contact-img">
          <img src="./images/contact-me.svg" alt="contact image" draggable="false" />
        </div>
        <form className="contact" name="contact" method="POST">
          <label htmlFor="name" className="label1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="feather feather-user">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            Name
          </label>
          <input type="text" name="Name" id="name" required />
          <label htmlFor="email" className="label2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="feather feather-at-sign">
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
            </svg>
            Email
          </label>
          <input type="email" name="Email" id="email" required />
          <label htmlFor="message" className="label3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="feather feather-message-square">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            Message
          </label>
          <textarea name="message" id="message" cols="25" rows="10" required></textarea>
          <button className="submit-btn" type="submit">
            <i className="fas fa-paper-plane"></i> &nbsp; Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

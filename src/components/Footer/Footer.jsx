import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Your Portfolio</h3>
          <p>A brief description or tagline about your portfolio.</p>
        </div>
        <div className="footer-right">
          <ul className="social-icons">
            <li><Link to="https://example.com"><i className="fab fa-facebook-f"></i></Link></li>
            <li><Link to="https://example.com"><i className="fab fa-twitter"></i></Link></li>
            <li><Link to="https://example.com"><i className="fab fa-linkedin-in"></i></Link></li>
            <li><Link to="https://example.com"><i className="fab fa-github"></i></Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;

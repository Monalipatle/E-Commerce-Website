import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* Brand */}
        <div className="footer-col">
          <h2 className="logo">ShopShopShop</h2>
          <p>
            Discover the best products at unbeatable prices. Quality meets
            convenience.
          </p>

          {/* Social */}
          <div className="socials">
            <span>🌐</span>
            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
          </div>
        </div>

        {/* Links */}
        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Help</h3>
          <ul>
            <li>Support</li>
            <li>FAQs</li>
            <li>Returns</li>
            <li>Shipping</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Legal</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms</li>
            <li>Security</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col">
          <h3>Subscribe</h3>
          <p>Get latest updates & offers</p>

          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" />
            <button>→</button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 ShopShopShop. All rights reserved.</p>

        <div className="payments">
          <span>💳</span>
          <span>🏦</span>
          <span>📱</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
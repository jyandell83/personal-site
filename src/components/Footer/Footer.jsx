const Footer = () => {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Jeremy Yandell</p>

      <ul className="footer-links">
        <li>
          <a
            href="https://github.com/jyandell83"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/jeremy-yandell"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

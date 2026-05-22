import "./Header.css";

const Header = () => {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="/" className="site-logo">
          Jeremy Yandell
        </a>

        <ul className="nav-links">
          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#experience">Experience</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

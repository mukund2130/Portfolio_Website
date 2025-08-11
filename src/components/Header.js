
export default function Header() {
  return (
    <header>
      <div className="container header-container">
        <a href="#home" className="logo">
          Portfo<span>lio.</span>
        </a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="menu-toggle">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </header>
  );
}


export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>
            Hi, I'm <span>MUKUND ADITYA PAWAR</span>
            <br />
            Data Science Student and Enthusiast
          </h1>
          <p>
            I'm  Data Science student passionate about transforming
            data into actionable insights. With expertise in Python, machine learning,
            and full-stack development, I build intelligent solutions that solve real-world problems.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-img"></div>
        </div>
      </div>
    </section>
  );
}

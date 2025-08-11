
export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2>Featured Projects</h2>
        </div>
        <div className="projects-container">

          <div className="project-card">
            <div className="project-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?auto=format&fit=crop&w=500&q=80')" }}></div>
            <div className="project-content">
              <div className="project-text">
                <h3>Stock Market Analysis Web App</h3>
                <p>Full-stack Python and Streamlit application for real-time stock analysis with ML-based forecasting, technical indicators, and interactive data visualization.</p>
              </div>
              <div className="project-footer">
                <div className="project-tags">
                  <span className="project-tag">Python</span>
                  <span className="project-tag">Streamlit</span>
                  <span className="project-tag">Machine Learning</span>
                  <span className="project-tag">Financial APIs</span>
                </div>
                <a href="https://stockmarketdashboard-jhgcd56xl3wv4ngpi9utto.streamlit.app/" target="_blank" rel="noreferrer" className="btn">View Web App</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=500&q=80')" }}></div>
            <div className="project-content">
              <div className="project-text">
                <h3>EchoBot - Voice Assistant</h3>
                <p>Python-based AI assistant that recognizes voice commands to perform actions like playing songs, providing weather updates, and answering queries.</p>
              </div>
              <div className="project-footer">
                <div className="project-tags">
                  <span className="project-tag">Python</span>
                  <span className="project-tag">Speech Recognition</span>
                  <span className="project-tag">APIs</span>
                  <span className="project-tag">AI</span>
                </div>
                <a href="https://github.com/mukund2130/EchoBot" target="_blank" rel="noreferrer" className="btn">View on GitHub</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=500&q=80')" }}></div>
            <div className="project-content">
              <div className="project-text">
                <h3>Portfolio Website</h3>
                <p>Personal portfolio website showcasing projects, skills, and resume with modern design. Responsive design with smooth animations and transitions.</p>
              </div>
              <div className="project-footer">
                <div className="project-tags">
                  <span className="project-tag">JavaScript</span>
                  <span className="project-tag">HTML</span>
                </div>
                <a href="https://github.com/mukund2130/Portfolio-Website" target="_blank" rel="noreferrer" className="btn">View on GitHub</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

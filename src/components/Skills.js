
export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2>My Skills</h2>
        </div>
        <div className="skills-container">
          <div className="skill-card">
            <div className="skill-icon"><i className="fas fa-code"></i></div>
            <h3>Programming Languages</h3>
            <p>C, Java, Python, Data Structures & Algorithms</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><i className="fas fa-chart-line"></i></div>
            <h3>Data Science & AI/ML</h3>
            <p>TensorFlow, Scikit-Learn, Pandas, NumPy</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><i className="fas fa-laptop-code"></i></div>
            <h3>Web Development</h3>
            <p>HTML, CSS, JavaScript, React, Streamlit</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><i className="fas fa-database"></i></div>
            <h3>Database & Backend</h3>
            <p>MySQL, Flask, RESTful APIs</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><i className="fas fa-chart-bar"></i></div>
            <h3>Data Visualization</h3>
            <p>Power BI, Matplotlib, Seaborn</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><i className="fas fa-cloud"></i></div>
            <h3>Cloud Computing</h3>
            <p>AWS (EC2, S3, Lambda, CloudFormation)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

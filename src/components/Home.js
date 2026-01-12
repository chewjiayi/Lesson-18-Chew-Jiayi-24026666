import featImg from "../assets/img-main.png";

export default function Home({ title }) {
  return (
    <div className="container home-page">
      <img
        className="img-feat"
        src={featImg}
        alt="RP School of Infocomm building"
      />

      <h1>{title}</h1>

      <p className="home-intro">
        The <strong>School of Infocomm (SOI)</strong> provides industry-relevant IT
        education focused on software development, digital design, and emerging
        technologies. Through hands-on, project-based learning, students are
        prepared for the evolving digital economy.
      </p>

      {/* Why Join SOI Section */}
      <section className="why-soi">
        <h2>Why Join the School of Infocomm?</h2>

        <div className="why-soi-cards">
          <div className="why-card">
            <h3>Hands-on Learning</h3>
            <p>
              Learn by doing through real-world projects, practical assignments,
              and collaborative teamwork.
            </p>
          </div>

          <div className="why-card">
            <h3>Industry-Relevant Skills</h3>
            <p>
              Build skills in software development, UI/UX design, data analytics,
              and financial technology.
            </p>
          </div>

          <div className="why-card">
            <h3>Future-Ready Education</h3>
            <p>
              Stay ahead with exposure to modern tools, frameworks, and emerging
              digital technologies.
            </p>
          </div>

          <div className="why-card">
            <h3>Career-Focused Pathways</h3>
            <p>
              Prepare for further studies or careers in the digital and
              technology-driven economy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

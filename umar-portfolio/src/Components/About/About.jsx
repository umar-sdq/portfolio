import './About.css'
import logo from '../../assets/logo-umar.png'
import psg from '../../assets/psg.jpg'
import habs from '../../assets/habs.jpg'
import react from '../../assets/react.svg'
const About = () => {
  return (
    <div className="about-page">
      <div className="luxury-bg"></div>
      <div className="animated-shapes"></div>

      <section className="intro">
        <img src={logo} alt="Umar Siddiqui Logo" className="logo" />
        <h1>Hi, I’m <span>Umar Siddiqui</span>.</h1>
        <p>
          A <span>Full Stack Developer</span> with experience in React, Node.js, Java, Python, C++, and C#.
          I focus on designing elegant, efficient, and scalable digital experiences that merge creativity with technology.
        </p>
        <div className="actions">
          <button className="btn-gold">Contact Me</button>
          <button className="btn-outline">Projects</button>
        </div>
      </section>

      <section className="skills">
        <h2>Tech Skills</h2>
        <div className="skills-grid">
          <span>JavaScript</span>
          <span>Python</span>
          <span>C++</span>
          <span>Java</span>
          <span>HTML / CSS</span>
          <span>MySQL / Supabase</span>
          <span>Git & GitHub</span>
        </div>
      </section>

      <section className="vision">
        <div className="vision-content">
          <div className="vision-text">
            <h2>My Vision</h2>
            <p>
              My journey in <span>software development</span> started with curiosity — a desire to understand how ideas turn into real, working systems.
              Over time, that curiosity became purpose.
            </p>
            <p>
              I’m studying at <span>Collège Montmorency</span> and plan to continue toward a <span>Software Engineering degree</span>,
              where I can deepen my skills and create software that leaves an impact.
            </p>
            <p>
              My focus lies in <span>innovation</span>, <span>design</span>, and <span>precision</span> —
              building experiences that feel effortless but are crafted with intent.  
              Code to me isn’t just logic — it’s design, performance, and storytelling combined.
            </p>
            <p>
              My dream is to blend <span>creativity</span> and <span>engineering</span> to develop digital experiences that connect people worldwide.
            </p>
          </div>
          <div className="vision-visual">
            <div className="glow-circle"></div>
            <div className="wave"></div>
          </div>
        </div>
      </section>

      

      <section className="aspirations">
        <h2>Professional Aspirations</h2>
        <p>
          My next step is to join a fast-paced development team or startup where I can learn from senior engineers
          and contribute to real-world projects that challenge me to grow.
        </p>
        <p>
          I’m open to internships, junior developer positions, and collaborations on full-stack applications.
        </p>
        <a href="/Umar_Siddiqui_CV.pdf" className="btn-gold download">Download Resume</a>
      </section>

      <section className="human">
        <h2>Why I Code</h2>
        <p>
          I started coding because I love seeing small ideas come to life turning imagination into something real.
          For me, programming is a creative process that merges logic and art. I enjoy designing smooth interfaces,
          solving complex problems, and learning something new with every line of code.
        </p>
        <p>
          Outside of tech, I’m passionate about design, fitness, and teamwork. All things that
          fuel my focus and creativity in development.
        </p>
      </section>

      <section className="about-section personal glass">
        <h2>Beyond the Code</h2>

        <div className="about-item">
  <div className="about-text">
    <h3>Soccer Passion</h3>
    <p>
      I’ve been a soccer fan for a long time and a proud <span>PSG</span> supporter through every high and low.
      There’s something about the energy of football that always pulls me in, the rhythm, the emotion, the unpredictability.
    </p>
    <p>
      Teamwork, and strategy all being the sports value, which I share in a day-to-day basis. 
      Watching a game reminds me how much I value passion and persistence: giving everything you’ve got.
    </p>
    <p>
      Whether it’s a Champions League game or a Ligue1 game, football and psg have always been my way to recharge.
    </p>
  </div>
  <div className="about-img">
    <img src={psg} alt="Paris Saint-Germain" />
  </div>
</div>

<div className="about-item reverse">
  <div className="about-text">
    <h3>Hockey Spirit</h3>
    <p>
      Growing up in Montreal, the <span>Canadiens</span> were more than just a team they were a tradition. 
      Some of my best memories are watching games with family, the city lighting up every time the Habs played.
    </p>
    <p>
      Hockey taught me something deeper: resilience. 
      The sport is fast, and unpredictable just like life. You fall, you get back up, you keep pushing.
    </p>
  </div>
  <div className="about-img">
    <img src={habs} alt="Montreal Canadiens" />
  </div>
</div>

      </section>

      {/* CTA */}
      <section className="contact-cta">
        <h2>Let’s Connect</h2>
        <p>
          Want to collaborate, discuss an idea, or just talk tech? 
          I’m always open to new opportunities and creative conversations.
        </p>
        <div className="actions">
          <button className="btn-gold">Get in Touch</button>
        </div>
      </section>
    </div>
  )
}

export default About

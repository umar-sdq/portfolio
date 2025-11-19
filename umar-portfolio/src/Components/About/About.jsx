import { useState, useEffect, use } from "react";
import './About.css'
import logo from '../../assets/logo-umar.png'
import psg from '../../assets/psg.jpg'
import habs from '../../assets/habs.jpg'
import react from '../../assets/react.svg'
import { useNavigate } from "react-router-dom";

const About = () => {

  const [slideIndex, setSlideIndex] = useState(0)
  const navaigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(prev => (prev + 1) % 2) 
    }, 3500) 

    return () => clearInterval(interval)
  }, [])
  const onClickContact = () => {
    navaigate('/contact');
  }
  const onClickProjects = () => {
    navaigate('/projects');
  }


  return (
    <div className="about-page">
      <div className="luxury-bg"></div>
      <div className="animated-shapes"></div>

      <section className="intro">
        <img src={logo} alt="Umar Siddiqui Logo" className="logo" />
<h1 className="page-load">Umar <span>Siddiqui</span></h1>
<p className="subtitle">Full Stack Developer — Student in Application Development</p>


        <p>
          A <span> Developer</span> with experience in React, Node.js, Java, Python, C++, and C#.
          I focus on designing elegant, efficient, and scalable digital experiences that merge creativity with technology.
        </p>
        <div className="actions">
          <button className="btn-gold" onClick={onClickContact}>Contact Me</button>
          <button className="btn-outline" onClick={onClickProjects}>Projects</button>
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
              My journey in <span>software development</span> started with curiosity, a desire to understand how ideas turn into real, working systems.
            </p>
            <p>
              I’m studying at <span>Collège Montmorency</span> and plan to continue toward a <span>Software Engineering degree</span>,
              where I can deepen my skills and create software that leaves an impact.
            </p>
            <p>
              My focus lies in <span>innovation</span>, <span>design</span>, and <span>precision </span>
              building unique applications that enhances the user experience.
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
       <a
  href="/Umar_Siddiqui_CV.pdf"
  className="btn-gold download"
  download="Umar_Siddiqui_CV.pdf"
>
  Download Resume
</a>

      </section>


      <section className="human">
        <h2>Why I Code</h2>
          
        <p>
          Back when I was a kid, I used to play Grand Theft Auto a lot, and was fascinated by how the game worked behind the scenes.
          This curiosity sparked my interest in programming.
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

        <div className="about-merged">
          <div className="about-text">
            <h3>Sports, Energy & Creativity</h3>
            <p>
              Sports have always been a big part of my life. Whether it’s the passion 
              of <span>PSG</span> or the tradition of the <span>Montreal Canadiens</span>, 
              both shaped how I approach challenges.
            </p>
            <p>
              Football gives me rhythm, emotion, creativity. Hockey taught me resilience 
              and pushing forward no matter what. 
            </p>
            <p>
              These sports keep me grounded, energized, and ready to tackle new challenges.
            </p>
          </div>

         <div className="about-slideshow">
  <img
    src={psg}
    className={`slideshow-img ${slideIndex === 0 ? "active" : ""}`}
  />
  <img
    src={habs}
    className={`slideshow-img ${slideIndex === 1 ? "active" : ""}`}
  />
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
          <button className="btn-gold" onClick={onClickContact}>Get in Touch</button>
        </div>
      </section>

    </div>
  )
}

export default About

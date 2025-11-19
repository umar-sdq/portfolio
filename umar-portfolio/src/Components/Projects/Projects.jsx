import './Projects.css'
import manuImg from '../../assets/manuimg.png'
import trackifyImg from '../../assets/image.png'
import footmediaImg from '../../assets/fmedia.png'
import projects from '../../assets/projects.png'

const Projects = () => {
  return (
    <div className="projects-page page-fade">

      <div className="luxury-bg"></div>
      <div className="animated-shapes"></div>

      {/* INTRO */}
      <section className="projects-header">
       <img src={projects} alt="" />
      </section>

      {/* MANUFIND */}
      <section className="project-section">
        <div className="project-image">
          <img src={manuImg} alt="ManuFind" />
        </div>

        <div className="project-text">
          <h2>ManuFind</h2>
          <p>
            ManuFind is a full-stack service marketplace connecting users with
            local service providers. Includes authentication, posting services,
            Supabase Storage for images, and a polished React interface.
          </p>

          <div className="stack">
            <span>React</span>
            <span>JavaScript</span>
            <span>Node.js</span>
            <span>MySQL</span>
            <span>Supabase Storage</span>
          </div>

          <div className="project-buttons">
            <a 
              href="https://github.com/umar-sdq/manufind" 
              target="_blank" 
              className="btn-outline"
            >
              GitHub
            </a>

            <a 
              href="https://manufind-g4pm.vercel.app/"
              target="_blank"
              className="btn-gold"
            >
              Visit Website
            </a>
          </div>
        </div>
      </section>




      {/* TRACKIFY */}
      <section className="project-section">
        <div className="project-image">
          <img src={trackifyImg} alt="Trackify" />
        </div>

        <div className="project-text">
          <h2>Trackify</h2>
          <p>
            Trackify is a personal finance tracker with clean UI, categories,
            charts, and detailed analytics. Built for smoothness and clarity.
          </p>

          <div className="stack">
            <span>JavaScript</span>
            <span>React</span>
            <span>Chart.js</span>
            <span>NoSQL</span>
            <span>MongoDB Cloud</span>
          </div>

          <div className="project-buttons">
            <a 
              href="https://github.com/umar-sdq/trackify"
              target="_blank"
              className="btn-outline"
            >
              GitHub
            </a>
          </div>

        </div>
      </section>



      {/* FOOTMEDIA */}
      <section className="project-section">
        <div className="project-image">
          <img src={footmediaImg} alt="FootMedia" />
        </div>

        <div className="project-text">
          <h2>FootMedia</h2>
          <p>
            FootMedia is a social platform for football fans. Users can share images,
            follow teams and explore a Pinterest-style feed with real-time UI.
          </p>

          <div className="stack">
            <span>JavaScript</span>
            <span>React</span>
            <span>Supabase</span>
            <span>NoSQL</span>
            <span>MongoDB Cloud</span>
          </div>

          <div className="project-buttons">
            <a 
              href="https://github.com/umar-sdq/FootMedia"
              target="_blank"
              className="btn-outline"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Projects

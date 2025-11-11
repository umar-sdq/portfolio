import './Projects.css'

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        <div className="project-card">
          <h2>ManuFind</h2>
          <p>Service marketplace built with React & Supabase.</p>
        </div>
        <div className="project-card">
          <h2>Trackify</h2>
          <p>Expense tracker app with charts and analytics.</p>
        </div>
        <div className="project-card">
          <h2>FootMedia</h2>
          <p>Social platform for football fans and creators.</p>
        </div>
      </div>
    </div>
  )
}

export default Projects

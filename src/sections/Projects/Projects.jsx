import styles from './ProjectStyles.module.css'
import YDC from '../../assets/ydc-voting-app.png'
import ProjectCard from '../../common/ProjectCard'
import MVC from '../../assets/MVC.png'
import Note from '../../assets/note-taker.png'
import CSC from '../../assets/code-script-chum.png'

function Projects() {
  return <section id='projects' className={styles.container}>
    <h1 className='sectionTitle'>Projects</h1>
    <div className={styles.projectsContainer}>
       <ProjectCard 
       src={YDC} 
       link="https://github.com/chrisduffey/ydc-voting-app" 
       h3="YDC" 
       p="Voting Application"
       />
       <ProjectCard 
       src={MVC} 
       link="https://github.com/chrisduffey/mvc-tech-blog" 
       h3="MVC" 
       p="Tech Blog"
       />
       <ProjectCard 
       src={Note} 
       link="https://github.com/chrisduffey/note-taker" 
       h3="Note Taker" 
       p="Note Taking application"
       />
       <ProjectCard 
       src={CSC} 
       link="https://github.com/chrisduffey/code-script-chum?tab=readme-ov-file" 
       h3="Code Script Chum" 
       p="A resource search engine for front end developers"
       />
    </div>
  
  </section>
  
}

export default Projects
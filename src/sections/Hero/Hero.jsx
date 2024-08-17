import styles from './HeroStyles.module.css'
import heroImg from '../../assets/CTD.png'
import themeIcon from '../../assets/icons8-sun.svg'
import linkedinIcon from '../../assets/icons8-linkedin.svg'
import githubIcon from '../../assets/icons8-github.svg'
import CV from '../../assets/Chris Duffey Res.pdf'
import { useTheme } from '../../common/ThemeContext'


function Hero() {
    const {theme, toggleTheme} = useTheme();

const themeIcon = theme === 'light'? 
  return (<section id='hero' className={styles.container}>
    <div><img className={styles.hero}
     src={heroImg}
      alt='profile pic of chris duffey'
      />
      <img className={styles.colorMode} 
      src={themeIcon} 
      alt='Mode icon'
      onClick={toggleTheme}
      />
      </div>
      <div className={styles.info}>
        <h1>Chris 
            <br/>
         Duffey</h1>
         <h2>Frontend Devloper</h2>
         <span>
            <a href='https://linkedin.com' target="_blank">
            <img src={linkedinIcon} alt="linkedin Icon"/>
            </a>
            <a href='https://github.com' target="_blank">
            <img src={githubIcon} alt="github Icon"/>
            </a>
           
         </span>
         <p>Inspire to make tomorrow better!</p>
         <a href={CV} download> 
            <button className='hover' >Resume</button>
         </a>
      </div>
  </section>
  );    
};

export default Hero;
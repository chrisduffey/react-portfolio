import styles from './FooterStyles.module.css'
import linkedinLight from '../../assets/icons8-linkedin.svg'
import linkedinDark from '../../assets/linkedinDark.png'
import githubLight from '../../assets/icons8-github.svg'
import githubDark from '../../assets/githubDark.png'
import { useTheme } from '../../common/ThemeContext'

function Footer() {
    const {theme, toggleTheme} = useTheme();

const githubIcon = theme === 'light'? githubLight: githubDark;
const linkedinIcon = theme === 'light'? linkedinLight: linkedinDark;
  return(

<section id='footer' className={styles.container}>
<span>
            <a href='https://linkedin.com' target="_blank">
            <img src={linkedinIcon} alt="linkedin Icon"/>
            </a>
            <a href='https://github.com' target="_blank">
            <img src={githubIcon} alt="github Icon"/>
            </a>
           
         </span>


</section>



  );



};

export default Footer
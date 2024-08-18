import styles from './HeaderStyles.module.css'
import heroImg from '../../assets/CTD.png'


import CV from '../../assets/Chris Duffey Res.pdf'



function Header() {




  return (
  <section id='hero' className={styles.container}>
    <div><img className={styles.hero}
     src={heroImg}
      alt='profile pic of chris duffey'
      />
      
      </div>
      <div className={styles.info}>
        <h1>Chris 
            <br/>
         Duffey</h1>
         <h2>Frontend Devloper</h2>
         
         <p className={styles.description}>Inspire to make tomorrow better!</p>
         <a href={CV} download> 
            <button className='hover' >Resume</button>
         </a>
      </div>
  </section>
  );    
};

export default Header;
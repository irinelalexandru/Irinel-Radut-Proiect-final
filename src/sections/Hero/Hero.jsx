import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Linkedin1.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import IrinelRadut_FrontEnd from '../../assets/IrinelRadut_FrontEnd.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Irinel Radut"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Irinel
          <br />
          Radut
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          
          <a href="https://github.com/irinelalexandru" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/irinel-alexandru-radut-84717b147/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        After years crafting visuals at Oracle and Microsoft as a Senior Graphic Designer, I'm now diving into the exciting world of FrontEnd Development. I'm bringing my keen eye for UI/UX to build engaging and user-friendly web experiences.
        </p>
        <a href={IrinelRadut_FrontEnd} target="_blank" rel="noopener noreferrer">
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;

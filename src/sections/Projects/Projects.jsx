import styles from './ProjectsStyles.module.css';
import Poster from '../../assets/Poster.jpg';
import Savetheocean from '../../assets/Savetheocean.png';
import Best from '../../assets/Best.png';
import ProjectCard from '../../common/ProjectCard';
import Bitdefender2 from '../../assets/Bitdefender2.png'
import MOJ from '../../assets/MOJ.png'
import Homewise from '../../assets/Homewise.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Bitdefender2}
          link="https://www.behance.net/gallery/217647041/Bitdefender-Logo-Animation"
          h3="Bitdefender"
          p="Logo Animation"
        />
        <ProjectCard
          src={Poster}
          link="https://www.behance.net/gallery/182107309/Typography-and-3D-Portraits-Collide"
          h3="3D Portrait"
          p="Typography and 3D Portraits"
        />
        <ProjectCard
          src={Savetheocean}
          link="https://www.behance.net/gallery/173967265/SaveTheOcean-Illustration-Poster-Brutalism"
          h3="SaveTheOcean"
          p="3D Illustration/Poster"
        />
        <ProjectCard
          src={Best}
          link="https://www.behance.net/gallery/164986781/BEST-Nutritional-Supplement-(concept)"
          h3="BEST"
          p="Conceptual supplement product"
        />
        <ProjectCard
          src={MOJ}
          link="https://www.behance.net/gallery/175771049/Oracle-and-Ministry-of-Justice-UK-"
          h3="MOJ"
          p="Ministery of Justice UK and Oracle"
        />
        <ProjectCard
          src={Homewise}
          link="https://www.behance.net/gallery/173670635/Homewise-A-modern-back-office-that-will-drive-growth"
          h3="Homewise"
          p="A modern back-office"
        />
      </div>
    </section>
  );
}

export default Projects;

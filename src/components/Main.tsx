import styles from './Main.module.scss';
import ScrollAnimation from '../helper/ScrollAnimation';
import { Header } from './Header/Header';
import { Content } from './FirstPage/Content/Content';
import { Timer } from './FirstPage/Timer/Timer';
import { Info } from './FirstPage/Info/Info';
import { About } from './FirstPage/About/About';
import { Roadmap } from './FirstPage/Roadmap/Roadmap';
import { Faq } from './FirstPage/Faq/Faq';
import { Footer } from './Footer/Footer';
import { Mint } from './SecondPage/Mint/Mint';


export function Main() {

  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <div className={styles.main_wrapper}>
      <Header scrollToSection={scrollToSection} />
      <main className={styles.main_content}>
        <Content />
        <ScrollAnimation>
          <Timer />
        </ScrollAnimation>
        <ScrollAnimation>
          <Info />
        </ScrollAnimation>
        <ScrollAnimation>
          <About />
        </ScrollAnimation>
        <ScrollAnimation>
          <Roadmap />
        </ScrollAnimation>
        <ScrollAnimation>
          <Faq />
        </ScrollAnimation>
        {/* <Mint/> */}
      </main>
      <footer  className={styles.main_footer}></footer>
      <Footer/>
    </div>
  );
}

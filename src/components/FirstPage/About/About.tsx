import styles from './About.module.scss';


export function About() {

  return (
    <section id='about'>
      <div className={styles.about_title}>
          <div className={styles.about_title_box}>
            <div className={styles.about_title_el}>
                <strong>About us</strong>
            </div>
          </div>
      </div>
      <div className={styles.about}>
        <ul className={styles.about_ul}>
          <li className={styles.about_li}>
            <div className={styles.about_li}>
              <div className={styles.about_li_wrapper}>
                <div className={styles.about_li_title}><strong>A team of professionals</strong></div>
                <div className={styles.about_li_descr}>Our team is consisted of dedicated and talented developers, designers, animators and many other professionals who work together to create games that will delight people and leave them with unforgettable experience.</div>
                <div className={styles.about_li_symbol}>01</div>
              </div>
            </div>
          </li>
          <li className={styles.about_li2}>
          <div className={styles.about_li}>
              <div className={styles.about_li_wrapper}>
                <div className={styles.about_li_title}><strong>We use Blockchain Technology</strong></div>
                <div className={styles.about_li_descr}>We use Blockchain Technology to create unique rewards and collectibles that can be exchanged or sold off-game.</div>
                <div className={styles.about_li_symbol}>02</div>
              </div>
            </div>
          </li>
          <li className={styles.about_li}>
          <div className={styles.about_li}>
              <div className={styles.about_li_wrapper}>
                <div className={styles.about_li_title}><strong>Powerful community</strong></div>
                <div className={styles.about_li_descr}>Our studio makes not just games, but also we build up a community of people who share our passion for games, blockchain and desire to create unique and high-quality products.</div>
                <div className={styles.about_li_symbol}>03</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

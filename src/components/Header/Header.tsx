import styles from './Header.module.scss'

type HeaderProps = {
    scrollToSection: (sectionId: string) => void;
  };

  export const Header: React.FC<HeaderProps> = ({ scrollToSection }) =>{

    return (
        <div className={styles.header_bck}>
            <div className={styles.header}>
                <div className={styles.header_left}>
                    <a className={styles.header_a} tabIndex={0} >Pepe Craft</a>
                </div>
                <div className={styles.header_center}>
                    <nav>
                        <ul role="menubar" className={styles.header_menubar}>
                            <li role="none" style={{ padding: ' 0 15px 0 0' }} ><a tabIndex={0} href="#about" className={styles.header_menubar_a} onClick={() => scrollToSection('about')}>About</a></li>
                            <li role="none" style={{ padding: ' 0 15px' }} ><a tabIndex={0} href="#roadmap" className={styles.header_menubar_a} onClick={() => scrollToSection('roadmap')}>Roadmap</a></li>
                            <li role="none" style={{ padding: ' 0 0 0 15px' }} ><a tabIndex={0} href="#faq" className={styles.header_menubar_a} onClick={() => scrollToSection('faq')}>FAQ</a></li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.header_right}>
                    <div className={styles.header_rightcontainer}>
                        <div className={styles.header_right_sociallinks}>
                            <div className={styles.header_right_sociallinks_wrapper}>
                                <div className={styles.sociallink_item}><a className={styles.sociallink_item_a} href="https://twitter.com/PepecraftN" target='_blank' rel="noreferrer" tabIndex={0}><img className={styles.sociallink_item_a_img} src="img/twiter.png" alt=''/></a></div>
                                <div className={styles.sociallink_item}><a className={styles.sociallink_item_a} href="https://discord.gg/nXw7Q8fB" target='_blank' rel="noreferrer" tabIndex={0}><img className={styles.sociallink_item_a_img} src="img/discord.png" alt=''/></a></div>
                                <div className={styles.sociallink_item}><a className={styles.sociallink_item_a} ><img className={styles.sociallink_item_a_img} src="img/ship.png" alt=''/></a></div>
                            </div>
                        </div>
                        <div className={styles.header_right_buttons}>
                            <div className={styles.header_right_buttons_wrap}>
                                <div className={styles.header_right_buttons_but}>
                                    <button className={styles.header_right_buttons_but_item}>Сonnect wallet</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

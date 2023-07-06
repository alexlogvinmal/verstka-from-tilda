import styles from './Footer.module.scss';


export function Footer() {

    return (
        <div className={styles.footer}>
            <span className={styles.footer_text}>© All Rights Reserved. Acme Inc.</span>
            <div className={styles.footer_right_sociallinks_wrapper}>
                <div className={styles.sociallink_item}><a className={styles.sociallink_item_a} href="https://twitter.com/PepecraftN" target='_blank' rel="noreferrer" tabIndex={0}><img className={styles.sociallink_item_a_img} src="img/twiter.png" alt=''/></a></div>
                <div className={styles.sociallink_item}><a className={styles.sociallink_item_a} href="https://discord.gg/nXw7Q8fB" target='_blank' rel="noreferrer" tabIndex={0}><img className={styles.sociallink_item_a_img} src="img/discord.png" alt=''/></a></div>
                <div className={styles.sociallink_item}><a className={styles.sociallink_item_a} ><img className={styles.sociallink_item_a_img} src="img/ship.png" alt=''/></a></div>
            </div>
        </div>
    );
}

import styles from './Info.module.scss';


export function Info() {

  return (
    <div className={styles.info}>
        <div className={styles.info_title}>
            <div className={styles.info_title_col}>
                <div className={styles.info_title_col_section}>
                    <div className={styles.info_title_col_item}>
                        <strong>Don't miss Pepe Crafters’ Mint</strong>   
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.info_animblock}>
            <div className={styles.info_animblock_text}>
                <div className={styles.info_animblock_text_description}>We give 1 Pepe Crafter to everyone at 5 NFT mint.</div>
                <div className={styles.info_animblock_text_button}><button className={styles.info_animblock_button}>MINT NOW</button></div>
                <div className={styles.info_animblock_text_small_description}>Follow the announcement of the mint on our Twitter and Discord.</div>
            </div>
            <div className={styles.info_animblock_video_col}>
                <img className={styles.info_animblock_video} alt='' src="img/video.gif"/>
            </div>
        </div>
    </div>
  );
}

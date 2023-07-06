import styles from './Timer.module.scss'

export function Timer() {

    return (
        <div className={styles.timer}>
            <div className={styles.timer_cover}>
                <div className={styles.timer_conteiner}>
                    <div className={styles.timer_mainblock}>
                        <div className={styles.timer_mainblock_cover}>
                            <div className={styles.timer_mainblock_content}>
                                <div className={styles.timer_textwraper}>
                                    <div className={styles.timer_textwraper_title}>
                                        <strong>Mint of the collection in</strong>
                                    </div>
                                </div>
                                <div className={styles.timer_mainblock_t}>
                                    <div className={styles.timer_mainblock_t_col}>
                                        <span className={styles.timer_info_number}>52</span>
                                        <div className={styles.timer_info_text}>Days</div>
                                    </div>
                                    <div className={styles.timer_mainblock_t_col}>
                                        <span className={styles.timer_info_number}>05</span>
                                        <div className={styles.timer_info_text}>Hours</div>
                                    </div>
                                    <div className={styles.timer_mainblock_t_col}>
                                        <span className={styles.timer_info_number}>13</span>
                                        <div className={styles.timer_info_text}>Minutes</div>
                                    </div>
                                    <div className={styles.timer_mainblock_t_col_sec}>
                                        <span className={styles.timer_info_number}>37</span>
                                        <div className={styles.timer_info_text}>Seconds</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

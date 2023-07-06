import styles from './Roadmap.module.scss';


export function Roadmap() {

  return (
    <section id='roadmap'>
        <div className={styles.roadmap_title}>
            <div className={styles.roadmap_title_conteiner}>
                <div className={styles.roadmap_title_box}>
                    <div className={styles.roadmap_title_el}>
                    <strong>Roadmap</strong>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.roadmap}>
            <div className={styles.roadmap_conteiner}>
                <div className={styles.roadmap_row}>
                    <div className={styles.roadmap_stage}>
                        <div className={styles.roadmap_stage_item}>
                            <strong>STAGE 1</strong>
                        </div>
                    </div>
                    <div className={styles.roadmap_right}>
                        <div className={styles.roadmap_right_wrapper}>
                            <div className={styles.roadmap_line}></div>
                            <div className={styles.roadmap_person}>
                                <div className={styles.roadmap_person_box}>
                                    <div className={styles.roadmap_person_img}></div>
                                </div>
                            </div>
                            <div className={styles.roadmap_text}>
                                <div className={styles.roadmap_text_title}>
                                    <strong>Community building</strong>
                                </div>
                                <div className={styles.roadmap_desc}>
                                    <strong>Twitter and Discord social media.</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.roadmap_row}>
                    <div className={styles.roadmap_stage}>
                        <div className={styles.roadmap_stage_item}>
                            <strong>STAGE 2</strong>
                        </div>
                    </div>
                    <div className={styles.roadmap_right}>
                        <div className={styles.roadmap_right_wrapper}>
                            <div className={styles.roadmap_line}></div>
                            <div className={styles.roadmap_person}>
                                <div className={styles.roadmap_person_box}>
                                    <div className={styles.roadmap_person_img}></div>
                                </div>
                            </div>
                            <div className={styles.roadmap_text}>
                                <div className={styles.roadmap_text_title}>
                                    <strong>Mint of NFT collection</strong>
                                </div>
                                <div className={styles.roadmap_desc}>
                                    <strong>And also the community development.</strong>
                                </div>
                                <div className={styles.roadmap_small_desc}>
                                Part of the proceeds from the sale of NFT will be used to encourage holders.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.roadmap_row}>
                    <div className={styles.roadmap_stage}>
                        <div className={styles.roadmap_stage_item}>
                            <strong>STAGE 3</strong>
                        </div>
                    </div>
                    <div className={styles.roadmap_right}>
                        <div className={styles.roadmap_right_wrapper}>
                            <div className={styles.roadmap_line}></div>
                            <div className={styles.roadmap_person}>
                                <div className={styles.roadmap_person_box}>
                                    <div className={styles.roadmap_person_img}></div>
                                </div>
                            </div>
                            <div className={styles.roadmap_text}>
                                <div className={styles.roadmap_text_title}>
                                    <strong>Release and launch of the online game</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.roadmap_row}>
                    <div className={styles.roadmap_stage}>
                        <div className={styles.roadmap_stage_item}>
                            <strong>STAGE 4</strong>
                        </div>
                    </div>
                    <div className={styles.roadmap_right}>
                        <div className={styles.roadmap_right_wrapper}>
                            <div className={styles.roadmap_line}></div>
                            <div className={styles.roadmap_person}>
                                <div className={styles.roadmap_person_box}>
                                    <div className={styles.roadmap_person_img}></div>
                                </div>
                            </div>
                            <div className={styles.roadmap_text}>
                                <div className={styles.roadmap_text_title}>
                                    <strong>Game adaptation</strong>
                                </div>
                                <div className={styles.roadmap_small_desc}>
                                Game adaptation for mobile devices and publishing on Google play, App Store.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.roadmap_row}>
                    <div className={styles.roadmap_stage}>
                        <div className={styles.roadmap_stage_item}>
                            <strong>STAGE 5</strong>
                        </div>
                    </div>
                    <div className={styles.roadmap_right}>
                        <div className={styles.roadmap_right_wrapper}>
                            <div className={styles.roadmap_line} style={{width:' 0px'}}></div>
                            <div className={styles.roadmap_person}>
                                <div className={styles.roadmap_person_box}>
                                    <div className={styles.roadmap_person_img}></div>
                                </div>
                            </div>
                            <div className={styles.roadmap_text}>
                                <div className={styles.roadmap_text_title}>
                                    <strong>Final</strong>
                                </div>
                                <div className={styles.roadmap_small_desc}>
                                Holders will have an exclusive right to receive free NFT from the next collections, they will participate in the pre-mints of our next collections, as well as in the pre-mints of the projects we will collaborate with.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
        <div className={styles.roadmap_button}>
            <div className={styles.roadmap_button_container}>
                <div className={styles.roadmap_button_item}>
                    <button className={styles.roadmap_button_el}>MINT NOW</button>
                </div>
            </div>
        </div>
    </section>
  );
}

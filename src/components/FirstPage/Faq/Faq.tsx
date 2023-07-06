import styles from './Faq.module.scss';
import { useState } from 'react';

export function Faq() {

    const [isContentVisible1, setIsContentVisible1] = useState(false);
    const [isContentVisible2, setIsContentVisible2] = useState(false);
    const [isContentVisible3, setIsContentVisible3] = useState(false);
    const [isContentVisible4, setIsContentVisible4] = useState(false);
    const [isContentVisible5, setIsContentVisible5] = useState(false);
    const [isContentVisible6, setIsContentVisible6] = useState(false);
    const [isContentVisible7, setIsContentVisible7] = useState(false);
    const [isContentVisible8, setIsContentVisible8] = useState(false);
    const [isContentVisible9, setIsContentVisible9] = useState(false);
    const [isContentVisible10, setIsContentVisible10] = useState(false);


    return (
        <section id='faq'>
            <div className={styles.faq_title}>
                <div className={styles.faq_title_conteiner}>
                    <div className={styles.faq_title_box}>
                        <div className={styles.faq_title_el}>
                            <strong>FAQ</strong>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.faq}>
                <div className={styles.faq_conteiner}>
                    <div className={styles.faq_col}>
                        <div className={styles.faq_header}>
                            <button className={styles.faq_button} onClick={e => setIsContentVisible1(!isContentVisible1)}>
                                <span className={styles.faq_button_text}>
                                    <span style={{ color: 'rgb(122, 255, 205)' }}>How many Pepe Crafters</span> will be in the collection?
                                </span>
                                <span className={styles.faq_button_icon}>
                                    <span className={`${styles.faq_button_icon_lines} ${isContentVisible1 ? styles.rotate : ''}`}><svg role="presentation" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g stroke="none" strokeWidth="2px" fill="none" fillRule="evenodd" strokeLinecap="square"><g transform="translate(1.000000, 1.000000)" stroke="#7affcd"><path d="M0,11 L22,11"></path><path d="M11,0 L11,22"></path></g></g></svg></span>
                                    <span className={styles.faq_button_icon_circle}></span>
                                </span>
                            </button>
                        </div>
                        <div className={`${styles.faq_content} ${isContentVisible1 ? styles.visible : ''}`}>
                            <div className={styles.faq_content_text}>
                                <div className={styles.faq_content_text_des}>
                                    <ul className={styles.faq_content_text_ul}>
                                        <li>4,900 Pepe Crafters will be minted</li>
                                        <li>
                                            200 will be minted by the team of creators (these NFT will be used in the future to give prizes to the
                                            winners of raffles)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.faq_col}>
                        <div className={styles.faq_header}>
                            <button className={styles.faq_button} onClick={e => setIsContentVisible2(!isContentVisible2)}>
                                <span className={styles.faq_button_text}>
                                    <span style={{ color: 'rgb(122, 255, 205)' }}></span>Which <span style={{ color: 'rgb(122, 255, 205)' }}>blockchain</span> will the minting take place on?
                                </span>
                                <span className={styles.faq_button_icon}>
                                    <span className={`${styles.faq_button_icon_lines} ${isContentVisible2 ? styles.rotate : ''}`}><svg role="presentation" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g stroke="none" strokeWidth="2px" fill="none" fillRule="evenodd" strokeLinecap="square"><g transform="translate(1.000000, 1.000000)" stroke="#7affcd"><path d="M0,11 L22,11"></path><path d="M11,0 L11,22"></path></g></g></svg></span>
                                    <span className={styles.faq_button_icon_circle}></span>
                                </span>
                            </button>
                        </div>
                        <div className={`${styles.faq_content} ${isContentVisible2 ? styles.visible : ''}`}>
                            <div className={styles.faq_content_text}>
                                <div className={styles.faq_content_text_des}>
                                    <ul className={styles.faq_content_text_ul}>
                                        <li>On the Ethereum network</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.faq_col}>
                        <div className={styles.faq_header}>
                            <button className={styles.faq_button} onClick={e => setIsContentVisible3(!isContentVisible3)}>
                                <span className={styles.faq_button_text}>
                                    What will be the <span style={{ color: 'rgb(122, 255, 205)' }}>price</span> of a mint?
                                </span>
                                <span className={styles.faq_button_icon}>
                                    <span className={`${styles.faq_button_icon_lines} ${isContentVisible3 ? styles.rotate : ''}`}><svg role="presentation" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g stroke="none" strokeWidth="2px" fill="none" fillRule="evenodd" strokeLinecap="square"><g transform="translate(1.000000, 1.000000)" stroke="#7affcd"><path d="M0,11 L22,11"></path><path d="M11,0 L11,22"></path></g></g></svg></span>
                                    <span className={styles.faq_button_icon_circle}></span>
                                </span>
                            </button>
                        </div>
                        <div className={`${styles.faq_content} ${isContentVisible3 ? styles.visible : ''}`}>
                            <div className={styles.faq_content_text}>
                                <div className={styles.faq_content_text_des}>
                                    <ul className={styles.faq_content_text_ul}>
                                        <li>The price at the pre-mint stage will be 0.01</li>
                                        <li>In the public mint, it will be 0.02</li>
                                        <li>Minters who minted 5 Pepe Crafters get 1 Pepe Crafter for free</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.faq_col}>
                        <div className={styles.faq_header}>
                            <button className={styles.faq_button} onClick={e => setIsContentVisible4(!isContentVisible4)}>
                                <span className={styles.faq_button_text}>
                                    How the funds from the mint are used?
                                </span>
                                <span className={styles.faq_button_icon}>
                                    <span className={`${styles.faq_button_icon_lines} ${isContentVisible4 ? styles.rotate : ''}`}><svg role="presentation" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g stroke="none" strokeWidth="2px" fill="none" fillRule="evenodd" strokeLinecap="square"><g transform="translate(1.000000, 1.000000)" stroke="#7affcd"><path d="M0,11 L22,11"></path><path d="M11,0 L11,22"></path></g></g></svg></span>
                                    <span className={styles.faq_button_icon_circle}></span>
                                </span>
                            </button>
                        </div>
                        <div className={`${styles.faq_content} ${isContentVisible4 ? styles.visible : ''}`}>
                            <div className={styles.faq_content_text}>
                                <div className={styles.faq_content_text_des}>
                                    <ul className={styles.faq_content_text_ul}>
                                        We will use the proceeds for:
                                        <li>expanding our team</li>
                                        <li>launching new products that add value to our community</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.faq_col}>
                        <div className={styles.faq_header}>
                            <button className={styles.faq_button} onClick={e => setIsContentVisible5(!isContentVisible5)}>
                                <span className={styles.faq_button_text}>
                                    How many <span style={{ color: 'rgb(122, 255, 205)' }}>maximum Pepe Crafters</span> can be minted per purse?
                                </span>
                                <span className={styles.faq_button_icon}>
                                    <span className={`${styles.faq_button_icon_lines} ${isContentVisible5 ? styles.rotate : ''}`}><svg role="presentation" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g stroke="none" strokeWidth="2px" fill="none" fillRule="evenodd" strokeLinecap="square"><g transform="translate(1.000000, 1.000000)" stroke="#7affcd"><path d="M0,11 L22,11"></path><path d="M11,0 L11,22"></path></g></g></svg></span>
                                    <span className={styles.faq_button_icon_circle}></span>
                                </span>
                            </button>
                        </div>
                        <div className={`${styles.faq_content} ${isContentVisible5 ? styles.visible : ''}`}>
                            <div className={styles.faq_content_text}>
                                <div className={styles.faq_content_text_des}>
                                    <ul className={styles.faq_content_text_ul}>
                                        <li>Maximum 15 NFT per purse can be mined</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.faq_col}>
                        <div className={styles.faq_header}>
                            <button className={styles.faq_button} onClick={e => setIsContentVisible6(!isContentVisible6)}>
                                <span className={styles.faq_button_text}>
                                    Can a Pepe Crafter be bought?
                                </span>
                                <span className={styles.faq_button_icon}>
                                    <span className={`${styles.faq_button_icon_lines} ${isContentVisible6 ? styles.rotate : ''}`}><svg role="presentation" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g stroke="none" strokeWidth="2px" fill="none" fillRule="evenodd" strokeLinecap="square"><g transform="translate(1.000000, 1.000000)" stroke="#7affcd"><path d="M0,11 L22,11"></path><path d="M11,0 L11,22"></path></g></g></svg></span>
                                    <span className={styles.faq_button_icon_circle}></span>
                                </span>
                            </button>
                        </div>
                        <div className={`${styles.faq_content} ${isContentVisible6 ? styles.visible : ''}`}>
                            <div className={styles.faq_content_text}>
                                <div className={styles.faq_content_text_des}>
                                    <ul className={styles.faq_content_text_ul}>
                                        <li>Yes, you can mint it or buy it on the secondary market at OpenSea.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.faq_col}>
                        <div className={styles.faq_header}>
                            <button className={styles.faq_button} onClick={e => setIsContentVisible7(!isContentVisible7)}>
                                <span className={styles.faq_button_text}>
                                    What are <span style={{ color: 'rgb(122, 255, 205)' }}>“secondary royalties”</span> and how will they be used?
                                </span>
                                <span className={styles.faq_button_icon}>
                                    <span className={`${styles.faq_button_icon_lines} ${isContentVisible7 ? styles.rotate : ''}`}><svg role="presentation" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g stroke="none" strokeWidth="2px" fill="none" fillRule="evenodd" strokeLinecap="square"><g transform="translate(1.000000, 1.000000)" stroke="#7affcd"><path d="M0,11 L22,11"></path><path d="M11,0 L11,22"></path></g></g></svg></span>
                                    <span className={styles.faq_button_icon_circle}></span>
                                </span>
                            </button>
                        </div>
                        <div className={`${styles.faq_content} ${isContentVisible7 ? styles.visible : ''}`}>
                            <div className={styles.faq_content_text}>
                                <div className={styles.faq_content_text_des}>
                                    <ul className={styles.faq_content_text_ul}>
                                        <li>We will receive 5% of all secondary sales.</li>
                                        <li>
                                            These proceeds will be used to continue to hire more employees, to fund operations and create even more value for our community, as well as to purchase prizes to be raffled off at a later date between the holders of our NFT collection.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.faq_col}>
                        <div className={styles.faq_header}>
                            <button className={styles.faq_button} onClick={e => setIsContentVisible8(!isContentVisible8)}>
                                <span className={styles.faq_button_text}>
                                    Will the Pepe Crafters be revealed immediately?
                                </span>
                                <span className={styles.faq_button_icon}>
                                    <span className={`${styles.faq_button_icon_lines} ${isContentVisible8 ? styles.rotate : ''}`}><svg role="presentation" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g stroke="none" strokeWidth="2px" fill="none" fillRule="evenodd" strokeLinecap="square"><g transform="translate(1.000000, 1.000000)" stroke="#7affcd"><path d="M0,11 L22,11"></path><path d="M11,0 L11,22"></path></g></g></svg></span>
                                    <span className={styles.faq_button_icon_circle}></span>
                                </span>
                            </button>
                        </div>
                        <div className={`${styles.faq_content} ${isContentVisible8 ? styles.visible : ''}`}>
                            <div className={styles.faq_content_text}>
                                <div className={styles.faq_content_text_des}>
                                    <ul className={styles.faq_content_text_ul}>
                                        <li>We will reveal them two days after the end of the mint.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.faq_col}>
                        <div className={styles.faq_header}>
                            <button className={styles.faq_button} onClick={e => setIsContentVisible9(!isContentVisible9)}>
                                <span className={styles.faq_button_text}>
                                    Can I use the image of my NFT for <span style={{ color: 'rgb(122, 255, 205)' }}>commercial purposes</span>?
                                </span>
                                <span className={styles.faq_button_icon}>
                                    <span className={`${styles.faq_button_icon_lines} ${isContentVisible9 ? styles.rotate : ''}`}><svg role="presentation" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g stroke="none" strokeWidth="2px" fill="none" fillRule="evenodd" strokeLinecap="square"><g transform="translate(1.000000, 1.000000)" stroke="#7affcd"><path d="M0,11 L22,11"></path><path d="M11,0 L11,22"></path></g></g></svg></span>
                                    <span className={styles.faq_button_icon_circle}></span>
                                </span>
                            </button>
                        </div>
                        <div className={`${styles.faq_content} ${isContentVisible9 ? styles.visible : ''}`}>
                            <div className={styles.faq_content_text}>
                                <div className={styles.faq_content_text_des}>
                                    <ul className={styles.faq_content_text_ul}>
                                        <li>Yes, of course, if you are the owner of the NFT, all rights to its use are transferred to you.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.faq_col}>
                        <div className={styles.faq_header}>
                            <button className={styles.faq_button} onClick={e => setIsContentVisible10(!isContentVisible10)}>
                                <span className={styles.faq_button_text}>
                                    How do I <span style={{ color: 'rgb(122, 255, 205)' }}>stay up to date on events</span>?
                                </span>
                                <span className={styles.faq_button_icon}>
                                    <span className={`${styles.faq_button_icon_lines} ${isContentVisible10 ? styles.rotate : ''}`}><svg role="presentation" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g stroke="none" strokeWidth="2px" fill="none" fillRule="evenodd" strokeLinecap="square"><g transform="translate(1.000000, 1.000000)" stroke="#7affcd"><path d="M0,11 L22,11"></path><path d="M11,0 L11,22"></path></g></g></svg></span>
                                    <span className={styles.faq_button_icon_circle}></span>
                                </span>
                            </button>
                        </div>
                        <div className={`${styles.faq_content} ${isContentVisible10 ? styles.visible : ''}`}>
                            <div className={styles.faq_content_text}>
                                <div className={styles.faq_content_text_des}>
                                    <ul className={styles.faq_content_text_ul}>
                                        <li>We will publish all announcements in our Discord and Twitter community, the holders will receive announcements of the most important and profitable events.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.faq_col}>
                        <div className={styles.faq_header}></div>
                    </div>
                </div>
            </div>
        </section >
    );
}

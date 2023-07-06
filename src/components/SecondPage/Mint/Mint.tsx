import styles from './Mint.module.scss';
import { useState } from 'react';

export function Mint() {
    const [mint, setMint] = useState(0);

  return (
    <div className={styles.mint}>
        <div className={styles.mint_modal}>
            <span className={styles.mint_title}><strong>Begin to mint Pepe Craft</strong></span>
            <span className={styles.mint_desc}><strong>Mint 5 Pepe Craft now and get 1 for free</strong></span>
            <div className={styles.mint_bottom}>
                <div>
                    <span className={styles.mint_minus_plus} onClick={e=>setMint(mint-1)}>−</span>
                    <input type='number' value={mint} className={styles.mint_input} readOnly/>
                    <span className={styles.mint_minus_plus} onClick={e=>setMint(mint+1)}>+</span>
                </div>
                <div>
                    <button className={styles.mint_button}>MINT NOW</button>
                </div>
            </div>
        </div>
    </div>
  );
}

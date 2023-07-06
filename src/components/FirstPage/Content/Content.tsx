import styles from './Content.module.scss'

export function Content() {
  const atoms = [];

  for (let i = 1; i <= 143; i++) {
    atoms.push(
      <div key={i} className={`${styles[`tn_element${i}`]}`}>
        <div className={`${styles[`tn_element${i}_atom`]}`}>
          <div className={styles.tn_atom}></div>
        </div>
      </div>
    );
  }


  return (
    <div className={styles.content}>
      <div className={styles.artboard}>
        <div className={styles.artboard_carrier}></div>
        <div className={styles.artboard_filter}></div>
        <div className={styles.artboard_elem}>
          <div className={styles.artboard_elem_anim}>
            <div className={styles.artboard_elem_anim_atom}></div>
          </div>
        </div>
        <div className={styles.artboard_text}>
          <div className={styles.artboard_text_el}>Pepe Craft is a fascinating game which you take on the role of toads in: defenders of your pond from teams of other online players. You can also raid other players' ponds and earn precious diamonds.</div>
        </div>
        <div className={styles.artboard_h}>
          <div className={styles.artboard_h_el}><strong>Pepe Craft Game Studio</strong></div>
        </div>
        <div className={styles.atoms}>{atoms}</div>
        <div className={styles.atoms_txt}>PEPE CRAFT</div>
        <div className={styles.artboard_button}>
          <button className={styles.artboard_button_item}>MINT NOW</button>
        </div>
      </div>
    </div>
  );
}

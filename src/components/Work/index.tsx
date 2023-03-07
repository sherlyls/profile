import React from "react";
import styles from "./Work.module.css";
import Image from "next/image";

export default function Work() {
  return (
    <div className={styles.work}>
      <div className={styles.titleWork}>Professional Portfolio</div>

      <div className={styles.grupCard}>
        <div className={`${styles.card} ${styles.rightSide}`}>
          <div className={`${styles.grupImage}`}>
            <Image
              className={styles.imgCard}
              src="/all-portfolio/cover-highend.jpg"
              alt="image"
              width={470}
              height={290}
            ></Image>
          </div>
          <div className={styles.grupDescription}>
            <div className={styles.titleDesc}>HIGHEND</div>
            <div className={styles.contentDesc}>
              Highend Magazine First-Class Lifestyle give inspiration About the
              Latest Women's Fashion, Lifestyle, Travel & Leisure.
            </div>
          </div>
        </div>

        <div className={styles.grupCard}>
          <div className={`${styles.card} ${styles.leftSide}`}>
            <div className={`${styles.grupImage}`}>
              <Image
                className={styles.imgCard}
                src="/all-portfolio/cover-nle.jpg"
                alt="image"
                width={470}
                height={290}
              ></Image>
            </div>
            <div className={styles.grupDescription}>
              <div className={styles.titleDesc}>
                NATIONAL LOGISTIC ECOSYSTEM
              </div>
              <div className={styles.contentDesc}>
                IDX Channel give information about latest news about economy,
                business, investment, stock exchange, market, finance, banking,
                entrepreneur in Indonesia
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.card} ${styles.rightSide}`}>
          <div className={`${styles.grupImage}`}>
            <Image
              className={styles.imgCard}
              src="/all-portfolio/cover-idx.jpg"
              alt="image"
              width={470}
              height={290}
            ></Image>
          </div>
          <div className={styles.grupDescription}>
            <div className={styles.titleDesc}>IDX CHANNEL</div>
            <div className={styles.contentDesc}>
              IDX Channel give information about latest news about economy,
              business, investment, stock exchange, market, finance, banking,
              entrepreneur in Indonesia
            </div>
          </div>
        </div>

        <div className={`${styles.card} ${styles.leftSide}`}>
          <div className={`${styles.grupImage}`}>
            <Image
              className={styles.imgCard}
              src="/all-portfolio/cover-wmm.png"
              alt="image"
              width={470}
              height={290}
            ></Image>
          </div>
          <div className={styles.grupDescription}>
            <div className={styles.titleDesc}>WMM FEST</div>
            <div className={styles.contentDesc}>
              Wirausaha Muda Mandiri Festival web give information about
              business competition that held by Bank Mandiri support the growth
              and development of young Indonesian entrepreneurs.
            </div>
          </div>
        </div>

        <div className={`${styles.card} ${styles.rightSide}`}>
          <div className={`${styles.grupImage}`}>
            <Image
              className={styles.imgCard}
              src="/all-portfolio/cover-icaii.png"
              alt="image"
              width={470}
              height={290}
            ></Image>
          </div>
          <div className={styles.grupDescription}>
            <div className={styles.titleDesc}>ICAII 2022</div>
            <div className={styles.contentDesc}>
              IDX Channel Anugerah Inovasi Indonesia ( Indonesia IDX Channel
              Innovation Award) give information about an event held by Idx
              Channel for conferring and appreciating companies that have
              demonstrated a superior innovation initiative, in the sense of
              broad impact, sustainability, and high novelty.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

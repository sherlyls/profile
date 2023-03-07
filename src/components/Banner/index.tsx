import { useEffect, useRef } from "react";
import styles from "./Banner.module.css";

export default function Banner() {
  const vidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    vidRef.current?.play();
  }, []);

  return (
    <>
      <div className={styles.wrapperVideo}>
        <video
          className={styles.video}
          src="/banner.mp4"
          ref={vidRef}
          muted
          autoPlay
          loop
        />
      </div>

      <div className={styles.wordBanner}>
        <div>
          <div>Hello, I'm Sherly Lolita Sari</div>
          <div>I'm a Frontend Web Developer</div>
        </div>
        <div className={styles.buttonView}>View my work</div>
      </div>

      {/* <div className={styles.menubar}>
        <li className={styles.mlAuto}>WORK</li>
        <li>ABOUT</li>
        <li>CONCTACT</li>
        <li className={styles.mlAuto}>Get in Touch</li>
      </div> */}
    </>
  );
}

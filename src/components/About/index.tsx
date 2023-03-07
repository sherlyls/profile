import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.text}>ABOUT</div>
      <Image
        className={styles.imageWrapper}
        src="/catprofile.png"
        alt="img-profile"
        width={300}
        height={300}
      />

      <div>
        Frontend Developer based in Jakarta with hands on experience of
        developing responsive, optimized and efficient web applications.
        Currently available for freelance opportunities.
      </div>
    </div>
  );
}

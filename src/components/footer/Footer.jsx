import Image from 'next/image';
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>Made by Shaikat With <span style={{"color": "red"}}>&hearts;</span></div>
      <div className={styles.social}>
      <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Shaikat Facebook Account" />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Shaikat" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Shaikat" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Shaikat" />
      </div>
    </div>
  );
};

export default Footer;

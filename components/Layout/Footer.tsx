import styles from '../../styles/footer/footer.module.css';

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footer__navigation}>
        <ul className={styles.footer__list}>
          <li>newslitters</li>
          <li>about us</li>
          <li>contact</li>
          <li>privacy</li>
          <li>terms</li>
        </ul>
      </nav>
      <p className={styles.footer__copyright}>The Connect is an unofficial news app.&#174;The Connect. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

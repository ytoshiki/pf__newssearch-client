import styles from '../../styles/navigation/navigation.module.css';
import Link from 'next/link';

export interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__list}>
        <li className={styles.navigation__item}>
          <Link href='/signin'>
            <a>Sign In</a>
          </Link>
        </li>
        <li className={styles.navigation__item}>
          <Link href='/subscribe'>
            <a className={styles.navigation__subscribe}>Subscribe</a>
          </Link>
        </li>
        <li className={styles.navigation__item}>
          <Link href='/search'>
            <a>
              <div className={styles.navigation__img}>
                <img src='/images/loupe.svg' alt='' />
              </div>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

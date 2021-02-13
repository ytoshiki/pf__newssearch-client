import Link from 'next/link';
import styles from '../../styles/header/header.module.css';
import { useRef, useState, useEffect } from 'react';

export interface HeaderProps {
  availableCategories: null | string[];
}

const Header: React.FC<HeaderProps> = ({ availableCategories = null }) => {
  const navRef = useRef(null);
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    console.log('called');
    if (!isNavVisible) {
      navRef.current.style.display = 'none';
    } else {
      navRef.current.style.display = 'flex';
    }
  }, [setIsNavVisible, isNavVisible]);

  const displayCategories = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header className={styles.header}>
      <div className='wrapper'>
        <div className={styles.header__logo}>
          <Link href='/'>
            <a>
              <span className={styles.header__logoSmall}>THE</span> CONNECT
            </a>
          </Link>
        </div>

        <nav className={styles.header__nav}>
          <ul className={styles.header__list}>
            <li className={styles.header__item}>
              <Link href='/categories/business'>
                <a>business</a>
              </Link>
            </li>
            <li className={styles.header__item}>
              <Link href='/categories/world'>
                <a>world</a>
              </Link>
            </li>
            <li className={styles.header__item}>
              <Link href='/categories/sports'>
                <a>sports</a>
              </Link>
            </li>
            <li className={styles.header__item}>
              <Link href='/categories/lifestyle'>
                <a>lifestyle</a>
              </Link>
            </li>
            <li className={styles.header__item}>
              <Link href='/categories/art'>
                <a>art</a>
              </Link>
            </li>
          </ul>
        </nav>

        <nav className={styles.hiddenNav}>
          <div className={styles.openNav} onClick={displayCategories}>
            <img src='/images/down.svg' alt='' />
          </div>
          <ul ref={navRef} className={styles.hiddenList}>
            {availableCategories &&
              availableCategories.map((category, index) => {
                return (
                  <li key={index}>
                    <Link href={`/categories/${category}`}>
                      <a>{category}</a>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

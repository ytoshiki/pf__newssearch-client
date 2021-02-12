import Link from 'next/link';
import styles from '../../styles/header/header.module.css';
import { useEffect, useRef, useState } from 'react';
import FadeInWhenVisible from '../Animation/FadeInWhenVisible';

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
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
      </div>
    </header>
  );
};

export default Header;

import Link from 'next/link';
import styles from '../../styles/header/header.module.css';
import { useRef, useState, useEffect } from 'react';

export interface HiddenNavProps {
  displayCategories: () => void;
  forwardRef: any;
}

const HiddenNav: React.FC<HiddenNavProps> = ({ displayCategories, forwardRef }) => {
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const category_url = 'https://api.currentsapi.services/v1/available/categories';
      const category_response = await fetch(category_url);
      const category_data = await category_response.json();

      return setAvailableCategories(category_data.categories);
    };

    fetchCategories();
  }, [availableCategories, setAvailableCategories]);

  return (
    <nav className={styles.hiddenNav}>
      <div className={styles.openNav} onClick={displayCategories}>
        <img src='/images/down.svg' alt='' />
      </div>
      <ul ref={forwardRef} className={styles.hiddenList}>
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
  );
};

export default HiddenNav;

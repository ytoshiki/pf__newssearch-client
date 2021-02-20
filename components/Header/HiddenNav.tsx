import Link from 'next/link';
import styles from '../../styles/header/header.module.css';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface HiddenNavProps {
  displayCategories: () => void;

  isNavVisible: boolean;
}

const HiddenNav: React.FC<HiddenNavProps> = React.memo(({ displayCategories, isNavVisible }) => {
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const category_url = 'https://api.currentsapi.services/v1/available/categories';
      const category_response = await fetch(category_url);
      const category_data = await category_response.json();

      setAvailableCategories(category_data.categories);
    };

    if (availableCategories.length < 1) {
      fetchCategories();
    }
  }, [availableCategories, setAvailableCategories]);

  const imageUrl = isNavVisible ? 'cose.svg' : 'category-02.svg';

  return (
    <nav className={styles.hiddenNav}>
      <div className={styles.openNav}>
        <img src={`/images/${imageUrl}`} alt='' onClick={displayCategories} />
      </div>

      <AnimatePresence>
        {isNavVisible && (
          <motion.ul className={styles.hiddenList} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {availableCategories &&
              availableCategories.map((category, index) => {
                return (
                  <li key={index}>
                    <Link href={`/categories/${category}`}>
                      <a onClick={displayCategories}>{category}</a>
                    </Link>
                  </li>
                );
              })}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
});

export default HiddenNav;

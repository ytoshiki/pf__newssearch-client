import styles from '../../styles/search/search.module.css';
import { useState } from 'react';

export interface SearchWrapperProps {}

const SearchWrapper: React.FC<SearchWrapperProps> = () => {
  const [input, setInput] = useState('');

  return (
    <div className={styles.search}>
      <div className={styles.search__inner}>
        <div className={styles.search__title}>
          <h1>Search Results</h1>
        </div>
        <div className={styles.search__formWrapper}>
          <form className={styles.search__form}>
            <input type='text' placeholder='Enter search terms' value={input} onChange={(e) => setInput(e.target.value)} />
            <button className={styles.search__formButton}>Submit</button>
          </form>
        </div>
        <div className={styles.search__result}></div>
      </div>
    </div>
  );
};

export default SearchWrapper;

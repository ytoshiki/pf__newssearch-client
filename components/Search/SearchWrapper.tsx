import styles from '../../styles/search/search.module.css';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { NewsItem } from '../LatestNews/LatestNewsWrapper';
import { motion } from 'framer-motion';
import Select from 'react-select';
import SearchForm from './SearchForm';

export interface SearchWrapperProps {
  searchResult: null | string | NewsItem[];
  loading: boolean | null;
  // languages: object;
}

const SearchWrapper: React.FC<SearchWrapperProps> = ({ searchResult, loading }) => {
  // const [input, setInput] = useState('');
  // const [language, setLanguage] = useState('en');
  // const router = useRouter();

  // const [isFocused, setIsFocused] = useState(false);

  // const inputRef = useRef(null);

  // useEffect(() => {
  //   if (!isFocused) {
  //     inputRef.current.focus();
  //     setIsFocused(true);
  //   }
  // }, []);

  // const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (!input) {
  //     return;
  //   }

  //   const searchTerm = input.trim();

  //   setInput('');
  //   return router.push(`/search/${searchTerm}/${language}`);
  // };

  let displayResult;

  // const langOptions = Object.entries(languages);

  // const options = langOptions.map((lan) => {
  //   return {
  //     value: lan[1],
  //     label: lan[0]
  //   };
  // });

  const formatDate = (date: string): string => {
    const rowDate = date.split(' ');
    return rowDate[0];
  };

  const formatAuthor = (author: string): string => {
    if (author.length > 12) {
      return '';
    }

    return author;
  };

  // const pickLang = (selectedOption: { value: string; label: string }) => {
  //   console.log(selectedOption.value);
  //   setLanguage(selectedOption.value);
  // };

  if (searchResult === 'Not Found') {
    displayResult = <p className='notFound'>Not results.</p>;
  } else if (Array.isArray(searchResult)) {
    displayResult = searchResult.map((news) => {
      return (
        <motion.div
          key={news.id}
          className={styles.search__resultItem}
          whileHover={{
            opacity: 0.7,
            transition: {
              duration: 0.2
            }
          }}
        >
          <a href={news.url} className={styles.search__a}>
            <div className={styles.search__resultInner}>
              <div className={styles.search__resultInfo}>
                <small className={styles.sarch__resultAuthor}>{formatAuthor(news.author)}</small>
                <h2 className={styles.sarch__resultTitle}>{news.title}</h2>
                <p className={styles.sarch__resultParagraph}>{news.description}</p>
                <small className={styles.sarch__resultDate}>{formatDate(news.published)}</small>
              </div>
              <div className={styles.search__resultImg}>
                <img src={news.image} alt='' />
              </div>
            </div>
          </a>
        </motion.div>
      );
    });
  } else {
    displayResult = '';
  }

  return (
    <div className={styles.search}>
      <div className={styles.search__inner}>
        <div className={styles.search__title}>
          <h1>Search Results</h1>
        </div>
        <div className={styles.search__formWrapper}>
          <SearchForm />
          {/* <form onSubmit={onSubmit} className={styles.search__form}>
            <input type='text' placeholder='Enter search terms' value={input} onChange={(e) => setInput(e.target.value)} ref={inputRef} />
            <br />
            <Select instanceId={'langType'} options={options} onChange={pickLang} />
            <button className={styles.search__formButton}>Submit</button>
          </form> */}
        </div>
        <div className={styles.search__result}>
          {loading && (
            <div className='sk-cube-grid'>
              <div className='sk-cube sk-cube1'></div>
              <div className='sk-cube sk-cube2'></div>
              <div className='sk-cube sk-cube3'></div>
              <div className='sk-cube sk-cube4'></div>
              <div className='sk-cube sk-cube5'></div>
              <div className='sk-cube sk-cube6'></div>
              <div className='sk-cube sk-cube7'></div>
              <div className='sk-cube sk-cube8'></div>
              <div className='sk-cube sk-cube9'></div>
            </div>
          )}
          <div>{displayResult}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchWrapper;

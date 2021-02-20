import styles from '../../styles/search/search.module.css';
import { NewsItem } from '../LatestNews/LatestNewsWrapper';
import { motion } from 'framer-motion';
import SearchForm from './SearchForm';
import { Img } from 'react-image';
import ImageLoading from '../Loading/ImgLoading';
import ImageError from '../Loading/ImgError';

export interface SearchWrapperProps {
  searchResult: null | string | NewsItem[];
  loading: boolean | null;
  // languages: object;
}

const SearchWrapper: React.FC<SearchWrapperProps> = ({ searchResult, loading }) => {
  let displayResult;

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
          <a href={news.url} className={styles.search__a} target='_blank'>
            <div className={styles.search__resultInner}>
              <div className={styles.search__resultInfo}>
                <small className={styles.sarch__resultAuthor}>{formatAuthor(news.author)}</small>
                <h2 className={styles.sarch__resultTitle}>{news.title}</h2>
                <p className={styles.sarch__resultParagraph}>{news.description}</p>
                <small className={styles.sarch__resultDate}>{formatDate(news.published)}</small>
              </div>
              <div className={styles.search__resultImg}>
                <Img src={news.image} alt={news.title} loader={<ImageLoading />} unloader={<ImageError />} />
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
          <h1>Search</h1>
        </div>
        <div className={styles.search__formWrapper}>
          <SearchForm />
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

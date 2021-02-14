import { NewsItem } from './LatestNewsWrapper';
import styles from '../../styles/latest_news/latest_news-list.module.css';
import { motion } from 'framer-motion';

export interface PrimaryNewsItemProps {
  newsItem: NewsItem;
}

const PrimaryNewsItem: React.FC<PrimaryNewsItemProps> = ({ newsItem }) => {
  return (
    <a href={newsItem.url} key={newsItem.id} target='_blank'>
      <motion.div
        className={styles.primaryLatestNews__inner}
        whileHover={{
          opacity: 0.8,
          transition: { duration: 0.5 }
        }}
      >
        <div className={styles.primaryLatestNews__img}>
          <img src={newsItem.image} alt={newsItem.title} />
          <div className={styles.primaryLatestNews__info}>
            <p>{newsItem.title}</p>
            <small>{newsItem.author}</small>
          </div>
        </div>
      </motion.div>
    </a>
  );
};

export default PrimaryNewsItem;

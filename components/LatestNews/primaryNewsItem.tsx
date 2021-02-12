import { NewsItem } from './LatestNewsWrapper';
import styles from '../../styles/latest_news/latest_news-list.module.css';

export interface PrimaryNewsItemProps {
  newsItem: NewsItem;
}

const PrimaryNewsItem: React.FC<PrimaryNewsItemProps> = ({ newsItem }) => {
  return (
    <a href={newsItem.url} key={newsItem.id} target='_blank'>
      <div className={styles.primaryLatestNews__inner}>
        <div className={styles.primaryLatestNews__img}>
          <img src={newsItem.image} alt='' />
          <div className={styles.primaryLatestNews__info}>
            <p>{newsItem.title}</p>
            <small>{newsItem.author}</small>
          </div>
        </div>
      </div>
    </a>
  );
};

export default PrimaryNewsItem;

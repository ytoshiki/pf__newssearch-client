import { NewsItem } from './LatestNewsWrapper';
import PrimaryNewsItem from './primaryNewsItem';
import styles from '../../styles/latest_news/latest_news-list.module.css';

export interface PrimaryNewsListProps {
  primaryNews: NewsItem[];
}

const PrimaryNewsList: React.FC<PrimaryNewsListProps> = ({ primaryNews }) => {
  return (
    <div className={styles.primaryLatestNews}>
      {primaryNews.map((newsItem) => {
        return <PrimaryNewsItem newsItem={newsItem} key={newsItem.id} />;
      })}
    </div>
  );
};

export default PrimaryNewsList;

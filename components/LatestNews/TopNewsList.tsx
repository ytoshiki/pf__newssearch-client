import { NewsItem } from './LatestNewsWrapper';
import TopNewsItem from './TopNewsItem';
import styles from '../../styles/latest_news/latest_news-list.module.css';

export interface TopNewsListProps {
  topNews: NewsItem[];
}

const TopNewsList: React.FC<TopNewsListProps> = ({ topNews }) => {
  return (
    <div className={styles.topLatestNews}>
      <h2>Latest News</h2>
      <ul className={styles.topLatestNews__list}>
        {topNews &&
          topNews.map((newsItem) => {
            return <TopNewsItem newsItem={newsItem} key={newsItem.id} />;
          })}
      </ul>
    </div>
  );
};

export default TopNewsList;

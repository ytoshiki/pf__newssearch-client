import { NewsItem } from './LatestNewsWrapper';
import styles from '../../styles/latest_news/latest_news-list.module.css';
import RestNewsItem from './RestNewsItem';

export interface RestNewsListProps {
  restNews: NewsItem[];
}

const RestNewsList: React.FC<RestNewsListProps> = ({ restNews }) => {
  return (
    <div className={styles.restLatestNews}>
      <ul className={styles.restLatestNews__list}>
        {restNews.map((news) => {
          if (news.image !== 'None') {
            return <RestNewsItem news={news} key={news.id} />;
          }
        })}
      </ul>
    </div>
  );
};

export default RestNewsList;

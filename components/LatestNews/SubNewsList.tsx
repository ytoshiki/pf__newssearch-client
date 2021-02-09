import { NewsItem } from './LatestNewsWrapper';
import styles from '../../styles/latest_news/latest_news-list.module.css';

export interface SubNewsListProps {
  subNews: NewsItem[];
}

const SubNewsList: React.FC<SubNewsListProps> = ({ subNews }) => {
  return (
    <div className={styles.subLatestNews}>
      {subNews &&
        subNews.map((news) => {
          return (
            <div key={news.id}>
              <div>
                <small>{news.author}</small>
              </div>
              <div className={styles.subLatestNews__title}>
                <a href={news.url}>{news.title}</a>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SubNewsList;

import styles from '../../styles/latest_news/latest_news-list.module.css';

export interface TopNewsItemProps {
  newsItem: {
    id: string;
    title: string;
    description: string;
    url: string;
    author: string;
    image: string;
    category: string[];
    published: string;
  };
}

const TopNewsItem: React.FC<TopNewsItemProps> = ({ newsItem }) => {
  return (
    <li className={styles.topLatestNews__item}>
      {newsItem.category && <small className={styles.topLatestNews__category}>{newsItem.category[0]}</small>}
      <br />
      {newsItem.url ? (
        <a href={newsItem.url} target='_blank'>
          {newsItem.title}
        </a>
      ) : (
        newsItem.title
      )}
    </li>
  );
};

export default TopNewsItem;

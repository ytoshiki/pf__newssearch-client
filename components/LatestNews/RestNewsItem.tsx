import styles from '../../styles/latest_news/latest_news-list.module.css';

export interface RestNewsItemProps {
  news: {
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

const RestNewsItem: React.FC<RestNewsItemProps> = ({ news }) => {
  const checkType = (author: string) => {
    const strArr = author.split('');
    if (strArr.includes('[') && strArr.includes(']')) {
      return '';
    }

    return author;
  };

  return (
    <li key={news.id} className={styles.restLatestNews__item}>
      <a href={news.url} target='_blank'>
        <div className={styles.restLatestNews__itemContent}>
          <div className={styles.restLatestNews__img}>
            <img src={news.image} alt='' />
          </div>
          <div>
            <h3>{news.title}</h3>
            <small>{checkType(news.author)}</small>
          </div>
        </div>
      </a>
    </li>
  );
};

export default RestNewsItem;

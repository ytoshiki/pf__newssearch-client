import styles from '../../styles/latest_news/latest_news-list.module.css';
import FadeInWhenVisible from '../Animation/FadeInWhenVisible';
import NewsAnimation from '../Animation/News';
import PrimaryNewsList from './primaryNewsList';
import RestNewsList from './RestNewsList';
import SubNewsList from './SubNewsList';
import TopNewsList from './TopNewsList';

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  url: string;
  author: string;
  image: string;
  category: string[];
  published: string;
}

export interface LatestNewsWrapperProps {
  primaryNews: NewsItem[];
  topNews: NewsItem[];
  subNews: NewsItem[];
  restNews: NewsItem[];
}

const LatestNewsWrapper: React.FC<LatestNewsWrapperProps> = ({ primaryNews, topNews, subNews, restNews }) => {
  return (
    <div className='marginTop'>
      <div className='wrapper'>
        <div className={styles.latestNews}>
          <PrimaryNewsList primaryNews={primaryNews} />
          <TopNewsList topNews={topNews} />
        </div>
        <SubNewsList subNews={subNews} />
        <NewsAnimation>
          <RestNewsList restNews={restNews} />
        </NewsAnimation>
      </div>
    </div>
  );
};

export default LatestNewsWrapper;

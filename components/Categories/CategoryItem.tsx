import { NewsItem } from '../LatestNews/LatestNewsWrapper';
import styles from '../../styles/categories/category.module.css';
import { formatDate, formatAuthor } from '../../helper/formatter';

import { Img } from 'react-image';
import ImageLoading from '../Loading/ImgLoading';
import ImageError from '../Loading/ImgError';

export interface CategoryItemProps {
  newsItem: NewsItem;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ newsItem }) => {
  return (
    <li className={styles.category__item}>
      <a href={newsItem.url} target='_blank'>
        <div className={styles.category__news}>
          <div className={styles.category__img}>
            {/* <img  alt='' /> */}
            <Img src={newsItem.image} alt={newsItem.title} loader={<ImageLoading />} unloader={<ImageError />} />
          </div>
          <div className={styles.category__newsInfo}>
            <small className={styles.category__newsDate}>{formatDate(newsItem.published)}</small>
            <h2>{newsItem.title}</h2>
            <small className={styles.category__newsAuthor}>{formatAuthor(newsItem.author)}</small>
          </div>
        </div>
      </a>
    </li>
  );
};

export default CategoryItem;

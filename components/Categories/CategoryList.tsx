import { NewsItem } from '../LatestNews/LatestNewsWrapper';
import CategoryItem from './CategoryItem';
import styles from '../../styles/categories/category.module.css';

export interface CategoryListProps {
  newsDisplay: NewsItem[];
}

const CategoryList: React.FC<CategoryListProps> = ({ newsDisplay }) => {
  return (
    <div className={styles.category__listWrapper}>
      <ul className={styles.category__list}>
        {newsDisplay &&
          newsDisplay.map((newsItem) => {
            return <CategoryItem key={newsItem.id} newsItem={newsItem} />;
          })}
      </ul>
    </div>
  );
};

export default CategoryList;

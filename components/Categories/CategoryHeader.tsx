import Link from 'next/link';
import styles from '../../styles/categories/category.module.css';

export interface CategoryHeaderProps {
  category: string;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ category }) => {
  return (
    <div className={styles.category__headerWrapper}>
      <h1 className={styles.category__header}>{category}</h1>
    </div>
  );
};

export default CategoryHeader;

import { GetStaticPaths, GetStaticProps } from 'next';
import { NewsItem } from '../../components/LatestNews/LatestNewsWrapper';

export interface CategoryProps {
  news: NewsItem[];
}

const Category: React.FC<CategoryProps> = ({ news }) => {
  const newsDisplay = news.slice(0, 10);
  return (
    <div>
      {newsDisplay &&
        newsDisplay.map((article) => {
          return <div key={article.id}>{article.title}</div>;
        })}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params.category;
  const endpoint = `https://api.currentsapi.services/v1/search?category=${category}&apiKey=${process.env.CURRENT_API_KEY}`;

  const response = await fetch(endpoint);
  const data = await response.json();

  // if (data.status !== 'ok') {
  //   return {
  //     props: {
  //       news: []
  //     }
  //   };
  // }

  return {
    props: {
      news: data.news
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = ['business', 'world', 'sports', 'lifestyle', 'art'];

  const paths = categories.map((category) => {
    return {
      params: {
        category: category
      }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export default Category;

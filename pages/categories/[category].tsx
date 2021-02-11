import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import CategoryHeader from '../../components/Categories/CategoryHeader';
import CategoryList from '../../components/Categories/CategoryList';
import Header from '../../components/Header/Header';
import { NewsItem } from '../../components/LatestNews/LatestNewsWrapper';
import Layout from '../../components/Layout/Layout';

export interface CategoryProps {
  news: NewsItem[];
  category: string;
}

const Category: React.FC<CategoryProps> = ({ news, category }) => {
  let newsDisplay = news.filter((newsItem) => {
    return newsItem.image !== 'None';
  });

  if (newsDisplay.length < 8) {
    newsDisplay = news;
  }

  return (
    <>
      <Head>
        <title>The Connect | {category}</title>
      </Head>
      <Layout>
        <Header />
        <CategoryHeader category={category} />
        <CategoryList newsDisplay={newsDisplay} />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params.category;
  const endpoint = `https://api.currentsapi.services/v1/search?category=${category}&apiKey=${process.env.CURRENT_API_KEY}`;

  const response = await fetch(endpoint);
  const data = await response.json();

  return {
    props: {
      news: data.news,
      category: category
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

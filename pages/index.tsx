import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import styles from '../styles/Home.module.css';
import LatestNewsWrapper, { NewsItem } from '../components/LatestNews/LatestNewsWrapper';
import Header from '../components/Header/Header';
import Offer from '../components/Offer/Offer';
import FadeInWhenVisible from '../components/Animation/FadeInWhenVisible';

interface HomeProps {
  latestNews: {
    id: string;
    title: string;
    description: string;
    url: string;
    author: string;
    image: string;
    category: string[];
    published: string;
  }[];
}

const Home: React.FC<HomeProps> = ({ latestNews }) => {
  const primaryNews = latestNews.slice(1, 2);
  const topNews = latestNews.slice(2, 7);
  const subNews = latestNews.slice(7, 8);
  const restNews = latestNews.slice(6, 14);

  return (
    <>
      <Head>
        <title>INDEX</title>
      </Head>
      <Layout>
        <div className={styles.home}>
          <Header />
          <LatestNewsWrapper primaryNews={primaryNews} topNews={topNews} subNews={subNews} restNews={restNews} />
          <FadeInWhenVisible>
            <Offer />
          </FadeInWhenVisible>
        </div>
      </Layout>
    </>
  );
};

// Runs in build time
export const getStaticProps = async () => {
  const endpoint = 'https://api.currentsapi.services/v1/search?';

  const url = `${endpoint}language=en&category=world&apiKey=${process.env.CURRENT_API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.status !== 'ok') {
    return {
      props: {
        latestNews: []
      }
    };
  }

  return {
    props: {
      latestNews: data.news
    }
  };
};

export default Home;

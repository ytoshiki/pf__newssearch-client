import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { motion, useViewportScroll } from 'framer-motion';

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
  return (
    <>
      <Head>
        <title>INDEX</title>
      </Head>
      <Layout>
        <div className={styles.home_title}>Hello world from next.js</div>
        <div className={styles.home_img}>
          <Image src='/images/main-img.jpg' width={1440} height={800} />
        </div>
        <div className={styles.home}>
          <h3>Hello Next.js</h3>
          {latestNews &&
            latestNews.map((news) => {
              return (
                <div key={news.id}>
                  <h2>{news.title}</h2>
                  <a href={news.url} target='_blank'>
                    Learn more
                  </a>
                </div>
              );
            })}
        </div>
      </Layout>
    </>
  );
};

// Runs in build time
export const getStaticProps = async () => {
  const endpoint = 'https://api.currentsapi.services/v1/latest-news?';

  const url = `${endpoint}language=en&apiKey=${process.env.CURRENT_API_KEY}`;

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

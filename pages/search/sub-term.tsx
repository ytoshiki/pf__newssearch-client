import { useRouter } from 'next/router';
import { NewsItem } from '../../components/LatestNews/LatestNewsWrapper';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import Header from '../../components/Header/Header';
import SearchWrapper from '../../components/Search/SearchWrapper';
import { GetStaticProps } from 'next';

export interface SearchResultProps {
  searchResult: NewsItem[];
  languages: object;
}

const SearchResult: React.FC<SearchResultProps> = ({ languages }) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  // const [newsResult, setNewsResult] = useState<NewsItem[] | string>();
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { term } = router.query;

  useEffect(() => {
    const searchNews = async () => {
      try {
        const endpoint = 'https://api.currentsapi.services/v1/search?';
        const term = router.query.term;

        const url = `${endpoint}language=en&keywords=${term}&apiKey=${process.env.NEXT_PUBLIC_CURRENT_API_KEY}`;

        const req = new Request(url);
        const response: { status: string; news: NewsItem[] } = await new Promise((resolve, reject) => {
          setLoading(true);
          setTimeout(() => {
            return reject('Searching Time Out');
          }, 5000);
          fetch(req)
            .then((res) => {
              return resolve(res.json());
            })
            .catch((err) => {
              return reject(err.message);
            });
        });

        if (response) {
          if (response.status !== 'ok') {
            throw new Error('Server Error');
          }
          if (response.news.length === 0) {
            setNews([]);
          }
          let returnedNews = response.news.filter((newsItem: NewsItem) => {
            return newsItem.image !== 'None';
          });

          if (returnedNews.length === 0) {
            returnedNews == response.news;
          }

          setNews(returnedNews);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        setNews([]);
      }
    };

    searchNews();
  }, [term]);

  const newsResult = news.length > 1 ? news : 'Not Found';

  return (
    <>
      <Head>
        <title>The Connect | Search</title>
      </Head>
      <Layout>
        <Header availableCategories={null} />
        <SearchWrapper searchResult={newsResult} loading={loading} />
      </Layout>
    </>
  );
};

export default SearchResult;

export const getStaticProps: GetStaticProps = async () => {
  const url = 'https://api.currentsapi.services/v1/available/languages';
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      languages: data.languages
    }
  };
};

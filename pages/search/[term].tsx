import { useRouter } from 'next/router';
import { NewsItem } from '../../components/LatestNews/LatestNewsWrapper';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import Header from '../../components/Header/Header';
import SearchWrapper from '../../components/Search/SearchWrapper';

export interface SearchResultProps {
  searchResult: NewsItem[];
}

const SearchResult: React.FC<SearchResultProps> = () => {
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

        console.log(process.env.NEXT_PUBLIC_API_KEY);

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
        // const data = await response.json();
      } catch (error) {
        // setNews([]);
        setLoading(false);
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
        <Header />
        <SearchWrapper searchResult={newsResult} loading={loading} />
      </Layout>
    </>
  );
};

export default SearchResult;

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { term } = params;

//   const endpoint = 'https://api.currentsapi.services/v1/search?';

//   const url = `${endpoint}language=en&category=${term}&apiKey=${process.env.CURRENT_API_KEY}`;

//   const response = await fetch(url);
//   const data = await response.json();

//   if (data.status !== 'ok') {
//     return {
//       props: {
//         searchResult: []
//       }
//     };
//   }

//   return {
//     props: {
//       searchResult: data.news
//     }
//   };
// };

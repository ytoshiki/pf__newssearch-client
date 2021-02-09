import Head from 'next/head';
import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout';
import SearchWrapper from '../../components/Search/SearchWrapper';

export interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  return (
    <>
      <Head>
        <title>The Connect | Search</title>
      </Head>
      <Layout>
        <Header />
        <SearchWrapper searchResult={null} loading={null} />
      </Layout>
    </>
  );
};

export default Search;

import Head from 'next/head';
import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout';
import SearchWrapper from '../../components/Search/SearchWrapper';

export interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  console.log('hello');
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

// Runs in build time
// export const getStaticProps = async () => {
//   const category_url = 'https://api.currentsapi.services/v1/available/categories';
//   const category_response = await fetch(category_url);
//   const category_data = await category_response.json();

//   return {
//     props: {
//       availableCategories: category_data.categories
//     }
//   };
// };

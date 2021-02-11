import Head from 'next/head';
import Footer from '../../../components/Layout/Footer';
import Form from '../../../components/Register/Form';
import RegisterHeader from '../../../components/Register/RegisterHeader';

export interface SubscribeProps {}

const Subscribe: React.FC<SubscribeProps> = () => {
  return (
    <>
      <Head>
        <title>The Connect | Subscribe</title>
      </Head>
      <RegisterHeader />
      <Form term='subscribe' />
      <Footer />
    </>
  );
};

export default Subscribe;

import Head from 'next/head';
import Footer from '../../../components/Layout/Footer';
import Form from '../../../components/Register/Form';
import RegisterHeader from '../../../components/Register/RegisterHeader';

export interface SignInProps {}

const SignIn: React.FC<SignInProps> = () => {
  return (
    <>
      <Head>
        <title>Sign In - World News and Articles</title>
      </Head>
      <RegisterHeader />
      <Form term='signin' />
      <Footer />
    </>
  );
};

export default SignIn;

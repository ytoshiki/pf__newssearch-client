import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <div>
      <h1>Oooopes...</h1>
      <h2>That page cannot be found</h2>
      <p>
        GO back to the{' '}
        <Link href='/'>
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;

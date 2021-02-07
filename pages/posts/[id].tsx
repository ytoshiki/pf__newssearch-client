import { GetStaticPaths, GetStaticProps } from 'next';
import { motion } from 'framer-motion';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostProps {
  post: Post;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <motion.div animate={{ opacity: 1 }} transition={{ delay: 1, type: 'spring', stiffness: 100 }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </motion.div>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  const posts = await response.json();

  const paths = posts.map((post: Post) => {
    return {
      params: {
        id: post.id.toString()
      }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
  const post = await response.json();

  return {
    props: {
      post
    }
  };
};

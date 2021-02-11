import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/global.css';
import { AnimatePresence, motion } from 'framer-motion';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <motion.div
      key={router.route}
      initial='initial'
      animate='animate'
      transition={{ duration: 0.5 }}
      variants={{
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        }
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

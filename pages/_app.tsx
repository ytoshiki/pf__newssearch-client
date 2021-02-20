import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/global.css';
import { AnimatePresence, motion } from 'framer-motion';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 0.5, delay: 0.1 }}
        variants={{
          initial: {
            opacity: 0
          },
          animate: {
            opacity: 1
          },
          exit: {
            opacity: 0
          }
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

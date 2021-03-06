import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export interface NewsAnimationProps {}

const NewsAnimation: React.FC<NewsAnimationProps> = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      transition={{ duration: 1, delay: 0.3 }}
      variants={{
        visible: { opacity: 1, translateY: -20 },
        hidden: { opacity: 0, translateX: 0 }
      }}
    >
      {children}
    </motion.div>
  );
};

export default NewsAnimation;

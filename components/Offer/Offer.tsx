import Link from 'next/link';
import styles from '../../styles/offer/offer.module.css';
import { motion } from 'framer-motion';

export interface OfferProps {}

const Offer: React.FC<OfferProps> = () => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };
  return (
    <motion.div variants={variants} initial='hidden' animate='visible' className={styles.offer}>
      <div className={styles.offer__inner}>
        <p className={styles.offer__catch}>
          The Name You Know. <br />
          The News You Need.
        </p>
        <div className={styles.offer__img}></div>
        <div className={styles.offer__content}>
          <p>Subscribe for full customization.</p>
          <Link href='/register/subscribe'>
            <a>Subscribe</a>
          </Link>
          <small>Completely free</small>
        </div>
      </div>
    </motion.div>
  );
};

export default Offer;

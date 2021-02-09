import Link from 'next/link';
import styles from '../../styles/offer/offer.module.css';

export interface OfferProps {}

const Offer: React.FC<OfferProps> = () => {
  return (
    <div className={styles.offer}>
      <div className={styles.offer__inner}>
        <p className={styles.offer__catch}>
          The Name You Know. <br />
          The News You Need.
        </p>
        <div className={styles.offer__img}></div>
        <div>
          <p>Subscribe for full customization.</p>
          <Link href='/subscribe'>
            <a>Subscribe</a>
          </Link>
          <small>Completely free</small>
        </div>
      </div>
    </div>
  );
};

export default Offer;

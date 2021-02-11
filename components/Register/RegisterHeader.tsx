import Link from 'next/link';
import styles from '../../styles/register/register.module.css';

export interface RegisterHeaderProps {}

const RegisterHeader: React.FC<RegisterHeaderProps> = () => {
  return (
    <>
      <header className={styles.register__header}>
        <div className={styles.register__logo}>
          <Link href='/'>
            <a>
              <span className={styles.register__logoSmall}>THE</span> CONNECT
            </a>
          </Link>
        </div>
      </header>
    </>
  );
};

export default RegisterHeader;

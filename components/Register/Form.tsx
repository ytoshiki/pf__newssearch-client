import styles from '../../styles/register/register.module.css';

export interface FormProps {
  term: string;
}

const Form: React.FC<FormProps> = ({ term }) => {
  const termChange = (): { heading: string; subHeading: string } => {
    if (term == 'signin') {
      return {
        heading: 'Sign in to your account',
        subHeading: 'Enter your e-mail to continue'
      };
    } else if (term == 'subscribe') {
      return {
        heading: 'Subscribe to the Connect',
        subHeading: 'Enter your e-mail address to continue'
      };
    }
  };

  const display = termChange();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.register__content}>
      <div className={styles.register__contentInner}>
        <h1>{display.heading}</h1>
        <span>{display.subHeading}</span>
        <form className={styles.register__form} onSubmit={onSubmit}>
          <label>E-mail</label>
          <input type='email' placeholder='Your e-mail address' />

          <input type='button' value='Next' />
        </form>
      </div>
    </div>
  );
};

export default Form;

import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import styles from '../../styles/search/search.module.css';
import Select, { StylesConfig } from 'react-select';
import { borderRadius } from 'react-select/src/theme';

export interface SearchFormProps {}

const SearchForm: React.FC<SearchFormProps> = () => {
  const [input, setInput] = useState('');
  const [language, setLanguage] = useState('en');
  const [languages, setLanguages] = useState();
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    if (!isFocused) {
      inputRef.current.focus();
      setIsFocused(true);
    }

    const fetchLanguages = async () => {
      const url = 'https://api.currentsapi.services/v1/available/languages';
      const response = await fetch(url);
      const data = await response.json();

      setLanguages(data.languages);
    };

    fetchLanguages();
  }, [setLanguages]);

  let langOptions;
  let options;

  if (typeof languages == 'object') {
    langOptions = Object.entries(languages);
    options = langOptions.map((lan) => {
      return {
        value: lan[1],
        label: lan[0]
      };
    });
  }

  const pickLang = (selectedOption: { value: string; label: string }) => {
    setLanguage(selectedOption.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) {
      return;
    }

    const searchTerm = input.trim();

    setInput('');
    return router.push(`/search/${searchTerm}/${language}`);
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,

      fontSize: state.selectProps.myFontSize
    }),
    container: (provided, state) => ({
      ...provided,
      display: 'inline-block',
      width: '120px',
      borderBottom: '1px solid rgb(236, 232, 232)',
      borderTop: '1px solid rgb(236, 232, 232)'
    }),
    control: (provided) => ({
      ...provided,
      border: 0,
      boxShadow: 'none',
      outline: 0,
      borderRadius: 0
    }),
    singleValue: (provided, state) => ({
      ...provided,
      fontSize: state.selectProps.myFontSize
    })
  };
  return (
    <form onSubmit={onSubmit} className={styles.search__form}>
      <input type='text' placeholder='Enter search terms' value={input} onChange={(e) => setInput(e.target.value)} ref={inputRef} />
      <br />

      {options && <Select instanceId={'langType'} options={options} onChange={pickLang} defaultValue={{ label: 'English', value: 'en' }} styles={customStyles} myFontSize='13px' />}
      <button className={styles.search__formButton}>Search</button>
    </form>
  );
};

export default SearchForm;

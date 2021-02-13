export const fetchLanguages = async () => {
  const url = 'https://api.currentsapi.services/v1/available/languages';
  const response = await fetch(url);
  const data = await response.json();

  return data.languages;
};

export const formatDate = (date: string): string => {
  const rowDate = date.split(' ');
  return rowDate[0];
};

export const formatAuthor = (author: string): string => {
  if (author.length > 12) {
    return '';
  }

  return author;
};

export const loadLocalStorage = () => {
  if (localStorage.getItem('book') === null) {
    localStorage.setItem('book', JSON.stringify([]));
    const data = localStorage.getItem('book');
    const bookStorage = JSON.parse(data);
    return bookStorage;
  }
  const data = localStorage.getItem('book');
  const bookStorage = JSON.parse(data);
  return bookStorage;
}

export const updateLocalStorage = (data) => {
  localStorage.setItem('book', JSON.stringify(data));
}

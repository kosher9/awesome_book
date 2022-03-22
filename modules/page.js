import { renderBooks } from './book.js';

const bookListDiv = document.getElementById('table');
const formDiv = document.getElementById('form');
const contactDiv = document.getElementById('contact');

const constructListPage = () => {
  bookListDiv.style.display = 'block';
  formDiv.style.display = 'none';
  contactDiv.style.display = 'none';

  renderBooks();
};
const constructFormPage = () => {
  bookListDiv.style.display = 'none';
  formDiv.style.display = 'block';
  contactDiv.style.display = 'none';
};
const constructContactPage = () => {
  bookListDiv.style.display = 'none';
  formDiv.style.display = 'none';
  contactDiv.style.display = 'block';
};

const page = (page) => {
  switch (page) {
    case 0:
      constructListPage();
      break;
    case 1:
      constructFormPage();
      break;
    case 2:
      constructContactPage();
      break;
    default:
      break;
  }
};

export default page;

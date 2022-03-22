import { DateTime } from './modules/luxon.js';
import { Book, renderBooks, addBook } from './modules/book.js';
import page from './modules/page.js';

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const submitButton = document.getElementById('button');

const itemList = document.getElementById('li-list');
const itemAdd = document.getElementById('li-add');
const itemContact = document.getElementById('li-contact');

const dateElement = document.getElementById('date');

const date = DateTime.now();
dateElement.textContent = date.toLocaleString(DateTime.DATETIME_MED);
itemList.addEventListener('click', () => {
  page(0);
});

itemAdd.addEventListener('click', () => {
  page(1);
});

itemContact.addEventListener('click', () => {
  page(2);
});

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const id = Math.floor(Math.random() * 10000) + 1;
  const title = titleInput.value;
  const author = authorInput.value;
  const book = new Book(id, title, author);
  titleInput.value = '';
  authorInput.value = '';
  addBook(book);
  renderBooks();
});

page(0);
renderBooks();

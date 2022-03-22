import { loadLocalStorage, updateLocalStorage } from './storage.js';

const radix = 10;

export class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  // Add book to storage
  static addBook(book) {
    const arr = loadLocalStorage();
    arr.push(book);
    updateLocalStorage(arr);
  }

  // Remove book from storage
  static removeBook(bookId) {
    const arr = loadLocalStorage();
    const data = arr.filter((item) => item.id !== parseInt(bookId, radix));
    updateLocalStorage(data);
  }
}

// let b = Book;

export function addBook(book) {
  Book.addBook(book);
}

const removeBook = (bookId) => {
  Book.removeBook(bookId);
};

const renderBook = (book) => {
  const { id, title, author } = book;

  const renderContainer = document.createElement('tr');
  const tdId = document.createElement('td');
  const tdTitle = document.createElement('td');
  const tdAuthor = document.createElement('td');
  const tdButton = document.createElement('td');
  tdButton.id = 'tdButton';
  const button = document.createElement('button');
  button.className = 'bg-danger text-light border-0 d-block';
  button.textContent = 'Delete';

  // button.addEventListener("click", () => {
  //   removeBook(id);
  // });

  tdId.innerHTML = id;
  tdTitle.innerHTML = title;
  tdAuthor.innerHTML = author;

  tdButton.appendChild(button);
  renderContainer.appendChild(tdId);
  renderContainer.appendChild(tdTitle);
  renderContainer.appendChild(tdAuthor);
  renderContainer.appendChild(tdButton);

  return renderContainer;
};

export const renderBooks = () => {
  const container = document.getElementById('ctn-book');
  container.innerHTML = '';
  const storage = loadLocalStorage();
  if (storage !== null) {
    storage.forEach((book) => {
      const child = renderBook(book);
      const button = child.children[3].firstChild;
      button.addEventListener('click', () => {
        removeBook(book.id);
        renderBooks();
      });
      container.appendChild(child);
    });
  }
};

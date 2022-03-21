import { loadLocalStorage } from "./storage.js";
import { updateLocalStorage } from "./storage.js";
import { renderBooks } from "./renderBook.js";

const radix = 10;

export class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  // Add book to storage
  static addBook(book) {
    let arr = loadLocalStorage()
    arr.push(book);
    updateLocalStorage(arr);
    renderBooks();
  }

  // Remove book from storage
  static removeBook(bookId) {
    let arr = loadLocalStorage()
    let data = arr.filter((item) => item.id !== parseInt(bookId, radix));
    updateLocalStorage(data);
    renderBooks();
  }
}

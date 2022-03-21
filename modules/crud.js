import { Book } from "./book.js";

export function addBook(book) {
  Book.addBook(book);
}

export function removeBook(bookId) {
  Book.removeBook(bookId);
}

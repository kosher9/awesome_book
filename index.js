import { DateTime } from "./modules/luxon.js";
import { Book } from "./modules/book.js";
import { page } from "./modules/page.js";
import { renderBooks } from "./modules/renderBook.js";
import { addBook } from "./modules/crud.js";

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const submitButton = document.getElementById("button");

const itemList = document.getElementById("li-list");
const itemAdd = document.getElementById("li-add");
const itemContact = document.getElementById("li-contact");

const dateElement = document.getElementById("date");

const date = DateTime.fromISO("2010-10-22T21:38:00")
dateElement.textContent = date.toLocaleString(DateTime.DATETIME_MED)
itemList.addEventListener("click", () => {
  page(0);
});

itemAdd.addEventListener("click", () => {
  page(1);
});

itemContact.addEventListener("click", () => {
  page(2);
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const id = Math.floor(Math.random() * 10000) + 1;
  const title = titleInput.value;
  const author = authorInput.value;
  const book = new Book(id, title, author);
  titleInput.value = "";
  authorInput.value = "";
  addBook(book);
  renderBooks();
});

page(0);
renderBooks();

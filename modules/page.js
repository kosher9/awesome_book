import { renderBooks } from "./renderBook.js";

const bookListDiv = document.getElementById("table");
const formDiv = document.getElementById("form");
const contactDiv = document.getElementById("contact");

function constructListPage(listElement, formElement, contactElement) {
  bookListDiv.style.display = "block";
  formDiv.style.display = "none";
  contactDiv.style.display = "none";

  renderBooks();
}
function constructFormPage(listElement, formElement, contactElement) {
  bookListDiv.style.display = "none";
  formDiv.style.display = "block";
  contactDiv.style.display = "none";
}
function constructContactPage(listElement, formElement, contactElement) {
  bookListDiv.style.display = "none";
  formDiv.style.display = "none";
  contactDiv.style.display = "block";
}

export function page(page) {
  switch (page) {
    case 0:
      constructListPage(bookListDiv, formDiv, contactDiv);
      break;
    case 1:
      constructFormPage(bookListDiv, formDiv, contactDiv);
      break;
    case 2:
      constructContactPage(bookListDiv, formDiv, contactDiv);
      break;
    default:
      break;
  }
}

import { loadLocalStorage } from "./storage.js";
import { removeBook } from "./crud.js";

const renderBook = (book) => {
  const { id, title, author } = book;

  const renderContainer = document.createElement("tr");
  const tdId = document.createElement("td");
  const tdTitle = document.createElement("td");
  const tdAuthor = document.createElement("td");
  const tdButton = document.createElement("td");
  const button = document.createElement("button");
  button.className = "bg-danger text-light border-0 d-block";
  button.textContent = "Delete";

  button.addEventListener("click", () => {
    removeBook(id);
  });

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
  const container = document.getElementById("ctn-book");
  container.innerHTML = "";
  let storage = loadLocalStorage()
  if (storage !== null) {
    storage.forEach((book) => {
      container.appendChild(renderBook(book));
    });
  }
};

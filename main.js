class Library {
  constructor() {
    this.booksList = [];
  }

  addBook(title, author) {
    const book = {
      title,
      author,
    };
    this.booksList.push(book);
    localStorage.setItem("bookList", JSON.stringify(this.booksList));
  }

  removeBook(title, author) {
    this.booksList = this.booksList.filter(
      (item) => item.title !== title && item.author !== author
    );
  }

  createBookDiv(book) {
    const div = document.createElement("div");
    div.className = "book";
    div.innerHTML = `<p>"${book.title}" by ${book.author}</p>
      <button class="remove-btn">Remove</button>`;

    const removeBtn = div.querySelector(".remove-btn");
    removeBtn.addEventListener("click", () => {
      this.removeBook(book.title, book.author);
      div.remove();
      localStorage.setItem("bookList", JSON.stringify(this.booksList));
    });
    return div;
  }
}

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const form = document.getElementById("form");
const booksSection = document.getElementById("books");

const library = new Library();

window.addEventListener("load", () => {
  if (localStorage.getItem("bookList")) {
    library.booksList = JSON.parse(localStorage.getItem("bookList"));
    if (library.booksList.length !== 0) {
      library.booksList.forEach((item) => {
        const newBook = library.createBookDiv(item);
        booksSection.append(newBook);
      });
    }
  }
});

form.addEventListener("submit", (e) => {
  library.addBook(title.value, author.value);
  const obj = {
    title: title.value,
    author: author.value,
  };
  title.value = "";
  author.value = "";
  const newBookDiv = library.createBookDiv(obj);

  booksSection.append(newBookDiv);
  e.preventDefault();
});

const burgerMenu = document.getElementById("burger-menu");
const menu = document.querySelector(".nav-menu");
const menuItems = document.querySelectorAll(".nav-item");
const contact = document.getElementById("contact-info");
const sectionTitle = document.querySelector('.title');

burgerMenu.addEventListener("click", () => {
  if (burgerMenu.getAttribute("data-toggled") === "false") {
    burgerMenu.classList.add("open");
    burgerMenu.setAttribute("data-toggled", "true");
  } else {
    burgerMenu.classList.remove("open");
    burgerMenu.setAttribute("data-toggled", "false");
  }
  burgerMenu.classList.toggle("burger-menu-toggled");
  menu.classList.toggle("toggled-menu");
});


menuItems.forEach((n) =>
  n.addEventListener("click", () => {
    burgerMenu.classList.remove("burger-menu-toggled");
    burgerMenu.setAttribute("data-toggled", "false");
    burgerMenu.classList.remove("open");
    menu.classList.remove("toggled-menu");

    let content = n.innerHTML;
    switch (content) {
      case "List":
        sectionTitle.innerHTML='All awesome books';
        booksSection.classList.remove("hidden");
        form.classList.add("hidden");
        contact.classList.add("hidden");
        break;
      case "Add new":
        sectionTitle.innerHTML = 'Add new';
        booksSection.classList.add("hidden");
        form.classList.remove("hidden");
        contact.classList.add("hidden");
        break;
      case "Contact":
        sectionTitle.innerHTML = 'Contact information';
        booksSection.classList.add("hidden");
        form.classList.add("hidden");
        contact.classList.remove("hidden");
        break;
    }
  })
);

const currentTime = document.querySelector('.current-time'); 

function updateTime(){
  let date = new Date(); 
  currentTime.innerHTML = `${date.toUTCString()}`;
}

setInterval(updateTime, 1000);
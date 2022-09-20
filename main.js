let booksList = [];

function addToLocalStorage() {
  const bookListSerialized = JSON.stringify(booksList);
  localStorage.setItem('bookList', bookListSerialized);
}

function addBook(title, author) {
  const book = {
    title,
    author,
  };
  booksList.push(book);
  addToLocalStorage();
}

function removeBook(title, author) {
  booksList = booksList.filter(
    (item) => item.title !== title && item.author !== author,
  );
  addToLocalStorage();
}

function createBookDiv(book) {
  const div = document.createElement('div');
  div.className = 'book';
  div.innerHTML = `<p class="author">${book.author}</p>
    <p class="title">${book.title}</p>
    <button class="remove-btn">remove</button> <hr>`;

  const removeBtn = div.querySelector('.remove-btn');
  removeBtn.addEventListener('click', () => {
    removeBook(book.title, book.author);
    div.remove();
  });
  return div;
}

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const form = document.getElementById('form');
const booksSection = document.getElementById('books');

window.addEventListener('load', () => {
  if (localStorage.getItem('bookList')) {
    booksList = JSON.parse(localStorage.getItem('bookList'));
    booksList.forEach((item) => {
      const newBook = createBookDiv(item);
      booksSection.append(newBook);
    });
  }
});

form.addEventListener('submit', (e) => {
  addBook(title.value, author.value);
  const obj = {
    title: title.value,
    author: author.value,
  };
  title.value = '';
  author.value = '';
  const newBookDiv = createBookDiv(obj);
  booksSection.append(newBookDiv);
  e.preventDefault();
});

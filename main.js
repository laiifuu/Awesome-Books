let booksList = []; 

function addToLocalStorage() {
    let bookListSerialized = JSON.stringify(booksList);
    localStorage.setItem("bookList", bookListSerialized);
}

function addBook(title, author){
    let book = {
        title : title, 
        author: author,
    }
    booksList.push(book); 
    addToLocalStorage();
}

function removeBook(title, author){
    booksList = booksList.filter(item => item.title !== title && item.author !== author);
    addToLocalStorage(); 
}

const books = document.getElementById('books');

function createBook(book) {
    const div = document.createElement('div');
    div.className = 'book';
    div.innerHTML=`<p class="author">${book.author}</p>
    <p class="title">${book.title}</p>
    <button class="remove-btn">remove</button> <hr>`;
}


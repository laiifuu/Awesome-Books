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


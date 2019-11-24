class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBook(book) {
        //Create the row and add the informations about the book
        let row = document.createElement('tr');
        row.innerHTML = `
            <td class="book-title">${book.title}</td>
            <td class="book-author">${book.author}</td>
            <td class="book-isbn">${book.isbn}</td>
            <td><span class="delete-book">x</span></td>
        `;
        //Append the book on the list
        let bookList = document.querySelector('#book-list');
        bookList.appendChild(row);
    }
    clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
    showAlert(message, className){
        //Remove alerts
        while(document.querySelector('.alert')){
            document.querySelector('.alert').remove();
        }
        //Create the alert and append before the form
        let msg = document.createElement('span');
        msg.className = `alert ${className}`;
        msg.appendChild(document.createTextNode(message));
        document.querySelector('.container').insertBefore(msg, document.querySelector('form'));
        //After 3 seconds the alert is removed
        setTimeout(function(){
            msg.remove();
        }, 3000);
    }
    removeBook(removeElement){
        removeElement.parentElement.parentElement.remove();
    }
    showTotal(){
        document.querySelector('#totalBooks').innerText = Storage.getItens().length;
    }
}

class Storage{
    static getItens(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        } else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static setItens(books){
        localStorage.setItem('books', JSON.stringify(books));
    }
    static displayBooks(){
        let books = Storage.getItens();
        let ui = new UI();
        books.forEach(function(b){
            ui.addBook(b);
        });
        ui.showTotal();
    }
    static addBook(book){
        let books = this.getItens();
        books.push(book);
        this.setItens(books);
    }
    static removeBook(book){
        let books = this.getItens();
        books.forEach(function(b, index){
            if(JSON.stringify(b) === JSON.stringify(book)){
                books.splice(index, 1);
            }
        });
        this.setItens(books);
    }
}

document.addEventListener("DOMContentLoaded", Storage.displayBooks);

document.querySelector('#add-book').addEventListener('click', function (e) {
    e.preventDefault();
    //Take the fields
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let isbn = document.querySelector('#isbn').value;
    //create a instance of UI
    let ui = new UI();

    if (title != '' && author != '') {
        let book = new Book(title, author, isbn);
        //add the book to list
        ui.addBook(book);
        Storage.addBook(book);
        ui.clearFields();
        ui.showAlert('Book added', 'green');
        ui.showTotal();
    } else{
        ui.showAlert('Please fill the title and the author', 'red');
    }
});

document.querySelector('body').addEventListener('click', function(e){
    if(e.target.className == 'delete-book'){
        let ui = new UI();
        //Remove from LocalStorage
        let row = e.target.parentElement.parentElement;
        let title = row.querySelector('.book-title').innerText;
        let author = row.querySelector('.book-author').innerText;
        let isbn = row.querySelector('.book-isbn').innerText;
        let book = new Book(title, author, isbn);
        Storage.removeBook(book);
        //Remove the book from UI
        ui.removeBook(e.target);
        ui.showAlert('Book removed', 'green');
        ui.showTotal();
    }
})


    

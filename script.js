let myLibrary = [];

function Book(title, author, pagesNum, isRead) {
  this.title = title;
  this.author = author;
  this.pagesNum = pagesNum;
  this.isRead = isRead;

  this.info = function () {
    return `${title} by ${author}, ${pagesNum} pages, ${
      isRead ? "read" : "not read yet"
    }`;
  };
}

function addBookToLibrary(title, author, pagesNum, isRead) {
  myLibrary.push(new Book(title, author, pagesNum, isRead));
}

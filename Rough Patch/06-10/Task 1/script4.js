class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    getSummary() {
        return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
    }
}

let book1 = new Book("Vision 20-20", "Dr. APJ Abdul Kalam", 200);
let book2 = new Book("The Alchemist", "Paulo Coelho", 208);
let book3 = new Book("To Kill a Mockingbird", "Harper Lee", 281);

console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(book3.getSummary());

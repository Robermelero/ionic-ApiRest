"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, type, author, price, photo, id_book, id_user) {
        if (id_book === void 0) { id_book = 0; }
        if (id_user === void 0) { id_user = 0; }
        this.title = title;
        this.type = type;
        this.author = author;
        this.price = price;
        this.photo = photo;
        this.id_book = id_book;
        this.id_user = id_user;
    }
    return Book;
}());
exports.Book = Book;

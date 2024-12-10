import React from "react";
import "./index.css";
import { books } from "./books";
import Book from "./Book";

const BookList = () => {
  const getBook = (id) => {
    const b = books.find((book) => book.id === id);
    const { title, author, img } = b;
    alert(`Book Infos:\n\nTitle: ${title}\nAuthor: ${author}\nImage: ${img}`);
  };
  return (
    <React.Fragment>
      <h1>Amazon best Sellers</h1>
      <section className="booklist">
        {books.map((book) => {
          return <Book {...book} key={book.id} getBook={getBook} />;
        })}
      </section>
    </React.Fragment>
  );
};

export default BookList;

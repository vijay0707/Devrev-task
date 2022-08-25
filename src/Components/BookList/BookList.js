import React from "react";
import BookCard from "../BookCard/BookCard";
import { books } from "../../assets/books";

const link =
  "https://www.shutterstock.com/image-photo/swindon-uk-november-18-2018-harry-1233048532";

const BookList = () => {
  return (
    <div className="row mt-4 mb-4">
      <div className="col-md-4">
        {books.map((book, key) => {
          return (
            <BookCard
              key={key}
              image={link}
              author={book.author}
              title={book.title}
              year={book.year}
              pages={book.pages}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BookList;

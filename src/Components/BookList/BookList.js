import "./booklist.css";
import React, { useState, useMemo } from "react";
import { Pagination } from "../Pagination/Pagination";
import BookCard from "../BookCard/BookCard";
import { books } from "../../assets/books";
import image from "../../assets/images/a-Dolls-house.jpg";
import { CardGroup } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

let PageSize = 10;

export const BookList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentBookList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return books.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <CardGroup>
        <Row xs={1} md={3} className="g-4">
          {currentBookList.map((book, key) => {
            return (
              <Col>
                <BookCard
                  key={key}
                  image={image}
                  author={book.author}
                  title={book.title}
                  year={book.year}
                  pages={book.pages}
                />
              </Col>
            );
          })}
        </Row>
      </CardGroup>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={books.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};
export default BookList;

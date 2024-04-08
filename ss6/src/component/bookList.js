import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as bookService from "../service/bookService";
import axios from "axios";

function BookList(props) {
  const [bookList, setBookList] = useState([]);
  const [nameSearch, setNameSearch] = useState([]);
  


  useEffect(() => {
    if (bookList.length === 0) {
      getAll();
    }
  }, [nameSearch]);

  const getAll = async () => {
    const response = await bookService.getAllBooks();
    const result = response.filter(book => book.name.includes(nameSearch));
    setBookList(result);
  };

  
  return (
    <>
      <Link to="/books/create">Thêm mới</Link>
      <input onChange={(evt) => setNameSearch(evt.target.value)}></input>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Author</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {bookList.map((book) => (
            <tr key={book.id}>
              <th scope="row">{book.id}</th>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>{book.price}</td>
              <td>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default BookList;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as bookService from "../service/bookService";
import Modal from "react-modal";
import axios from "axios";
import Search from "./search";
import { toast } from "react-toastify";

function BookList(props) {
  const [bookList, setBookList] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [bookDelete, setBookDelete] = useState({});
  const [searchTerm, setSearchTerm] = useState(""); // State lưu trữ giá trị của ô tìm kiếm
  const customStyles = {
    content: {
      top: "30%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  
  useEffect(() => {
      getAll();
    
  }, [searchTerm]);


  const getAll = async () => {
    const response = await bookService.getAllBooks();
    const result = response.filter((book) => book.name.includes(searchTerm)); // search by name
    setBookList(result);
  };

  const deleteBooks = async () => {
    const isSuccess = await bookService.deleteBooks(bookDelete.id);
    if (isSuccess) {
      toast.success("Book deleted successfully");
    }
    setIsOpen(false);
    getAll();
  };

  const openModal = (book) => {
    setBookDelete(book);
    setIsOpen(true);
  };

  return (
    <>
      <Link to="/books/create">Thêm mới</Link>
      <input
        type="text"
        placeholder="Tìm kiếm theo tên sách"
        onChange={(e) => setSearchTerm(e.target.value || '')}
      />
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
                <Link to={"/books/edit/" + book.id}>
                  <button className="btn btn-primary">Edit</button>
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => openModal(book)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <h2>Xóa Sách</h2>

        <p>Bạn có muốn xóa sách {bookDelete.name}?</p>
        <button onClick={deleteBooks}>Xác nhận</button>
      </Modal>
    </>
  );
}
export default BookList;

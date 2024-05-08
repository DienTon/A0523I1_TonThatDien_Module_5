import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as bookService from "../service/bookService";
import Modal from "react-modal";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";

function BookList(props) {
  const [bookList, setBookList] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [errorS, setErrorS] = useState("");


  useEffect(() => {
    getAllCategories();
    getAll();
    
  }, [searchName,searchCategory]);

  const getAll = async () => {
    const response = await bookService.getAllBooks();
    if (response) {
      const result = response.filter((book) => {
        const matchesName =
          searchName === "" ||
          book.name.toLowerCase().includes(searchName.toLowerCase());
        const matchesCategory =
          searchCategory === "" ||
          book.category.name
            .toLowerCase()
            .includes(searchCategory.toLowerCase());
            
        return matchesName && matchesCategory;
      });
      if(result == false) {
        setErrorS("Không tìm thấy");
      }else{
        setErrorS("");
      }
      setBookList(result);
    }
  };
  const getAllCategories = async () => {
    const foundCategory = await bookService.getAllCategories();
    setCategories(foundCategory);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>List book</h1>
      <div style={{ marginBottom: "20px", marginTop: "20px" }}>
        <input
          style={{ marginLeft: "", width: "30%" }}
          type="text"
          placeholder="Search by book name..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value || "")}
        />
        <select
          style={{ marginLeft: "5%", width: "30%" }}
          type="text"
          placeholder="Search by category..."
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value || "")}
        >
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <Link to="/books/create">
        <button className="btn btn-primary">Thêm sách</button>
      </Link>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tên</th>
            <th scope="col">Ngày nhập</th>
            <th scope="col">Số lượng</th>
            <th scope="col">Thể loại</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {bookList.map((book) => (
            <tr key={book.id}>
              <th scope="row">{book.id}</th>
              <td>{book.name}</td>
              <td>{book.date}</td>
              <td>{book.soLuong}</td>
              <td>{book.category.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1 style={{color: "red", textAlign: "center"}}>{errorS}</h1>
    </>
  );
}

export default BookList;

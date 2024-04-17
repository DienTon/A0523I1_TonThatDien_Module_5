import React, { useState, useEffect } from "react";
import * as bookService from "../service/bookService";

function Search() {
  const [searchTerm, setSearchTerm] = useState(""); // State lưu trữ giá trị của ô tìm kiếm
  const [searchResults, setSearchResults] = useState([]); // State lưu trữ kết quả tìm kiếm

  useEffect(() => {
    // Gọi hàm searchBooks() mỗi khi searchTerm thay đổi
    searchBooks();
  }, [searchTerm]);

  const searchBooks = async () => {
    try {
      // Gọi service để tìm kiếm sách theo searchTerm
      const response = await bookService.findByName(searchTerm);
      setSearchResults(response);
    } catch (error) {
      console.error("Error searching books:", error);
    }
  };

  return (
    <div>
      <h2>Kết quả tìm kiếm</h2>
      {/* Ô input để nhập từ khóa tìm kiếm */}
      <input
        type="text"
        placeholder="Tìm kiếm theo tên sách"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* Hiển thị danh sách kết quả tìm kiếm */}
      <ul>
        {searchResults.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
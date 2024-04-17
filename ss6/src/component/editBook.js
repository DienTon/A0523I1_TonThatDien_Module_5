import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as bookService from "../service/bookService";
import { toast } from "react-toastify";
import * as Yup from 'yup'; // Đảm bảo bạn đã import Yup từ thư viện yup

function BookEdit() {
  const [book, setBook] = useState({
    id: '', // Khởi tạo một object book với các trường id, name, author, price
    name: '',
    author: '',
    price: ''
  });
  const navigate = useNavigate();
  const [isSubmit, setSubmit] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchBook();
  }, [id]);

  const fetchBook = async () => {
    if (id) {
      try {
        const foundBook = await bookService.findById(id);
        setBook(foundBook);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    }
  };

  const editBook = async (values) => {
    setSubmit(true);
    try {
      await bookService.updateBooks(id,values);
      toast.success("Book updated successfully");
      navigate("/books");
    } catch (error) {
      console.error("Error updating book:", error);
      setSubmit(false);
    }
  };

  function handleChange(event) {
    setBook({
      ...book,
      [event.target.name]: event.target.value
    });
  }

  const initialValues = {
    id: book.id, // Giá trị mặc định cho trường id
    name: book.name,
    author: book.author,
    price: book.price
  };
  return (
    <>
      <Formik
        initialValues={book}
        onSubmit={editBook}
      >
        <Form>
          {/* Các trường input */}
          <Field type="hidden" name="id"/>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" />
          <br />
          <label htmlFor="author">Author:</label>
          <Field type="text" id="author" name="author" />
          <br />
          <label htmlFor="price">Price:</label>
          <Field type="text" id="price" name="price" />
          <br />
          <button type="submit">Save Changes</button>
        </Form>
      </Formik>
    </>
  );
}

export default BookEdit;
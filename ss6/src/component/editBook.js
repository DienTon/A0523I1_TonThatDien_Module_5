import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useNavigate,useParams } from "react-router-dom";
import * as bookService from "../service/bookService";
import { toast } from "react-toastify";

function BookEdit() {
  const [book, setBook] = useState();
  const navigate = useNavigate();
  const [isSubmit, setSubmit] = useState([]);
  const {id} =  useParams();

  useEffect(() => {

    fetchBook();
  }, [id]);
  const fetchBook = async () => {
    if(id){
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
      await bookService.updateBooks(values); // Truyền values thay vì book
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

  

  return (
    <>
      <Formik initialValues={book} onSubmit={editBook}>
        <Form>
          <Field type="hidden" name="id"  /> <br></br>
          <Field name="name"  /> <br></br>
          <Field name="author" /> <br></br>
          <Field name="price" /> <br></br>
          <button type="submit">Thêm mới</button>
        </Form>
      </Formik>
    </>
  );
}

export default BookEdit;

import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import * as bookService from "../service/bookService";
import { toast } from "react-toastify";
import BookList from "./bookList";

function BookCreate() {
  const [book, setBook] = useState();
  const newId = Math.floor(Math.random() * 1000);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [isSubmit, setSubmit] = useState([]);

  const getAllCategories = async () => {
    const foundCategory = await bookService.getAllCategories();
    setCategories(foundCategory);
  };
  useEffect(() => {
    getAllCategories();
    setBook({
      id: "",
      name: "",
      soLuong: 1,
      date: "",
      category: {},
    });
    
  },[]);

  const validateBook = {
    id: Yup.number().min(0, "Id không được nh hơn 0").max(10000000000, "Id không được lớn hơn 10000000000").required("không được bỏ trống"),
    name: Yup.string().min(3, "Tên không được nhỏ hơn 3 ký tự").max(100, "Tên không đươc lớn hơn 100 ký tự").required("không được bỏ trống"),
    soLuong: Yup.number().min(1, "Số lượng không nhỏ hơn 1"),
    date: Yup.date().required("không được bỏ trống"),
  };

  const createBook = async (values) => {
    setSubmit(true);
    values.category = JSON.parse(values.category);
    console.log(values);
    setSubmit(false);
    await bookService.addNewBooks(values);
    toast.success("Thêm sách thành công");
    navigate("/books");
  };
  if (!book) {
    return null;
  }

  

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Create book</h1>
      <div style={{ maxWidth: "60%", margin: "0 auto" }}>
        <Formik
          initialValues={book}
          onSubmit={createBook}
          validationSchema={Yup.object(validateBook)}
        >
          <Form className="form-group">
            <div className="col-sm">
              Id: <Field className="form-control" type="number" name="id" />
              <br></br>
              <ErrorMessage name="id" component="p"></ErrorMessage>
              Tên sách: <Field className="form-control" name="name" />
              <br></br>
              <ErrorMessage name="name" component="p"></ErrorMessage>
              Date: <Field className="form-control" type="date" name="date" />
              <br></br>
              <ErrorMessage name="date" component="p"></ErrorMessage>
              Số lượng:
              <Field className="form-control" type="number" name="soLuong" />
              <br></br>
              <ErrorMessage name="soLuong" component="p"></ErrorMessage>
              Thể loại:
              <Field className="form-control" as="select" name="category">
                {categories.map((category) => (
                  <option key={category.id} value={JSON.stringify(category)}>
                    {category.name}
                  </option>
                ))}
              </Field>
              <br></br>
              <button type="submit">Thêm mới</button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default BookCreate;

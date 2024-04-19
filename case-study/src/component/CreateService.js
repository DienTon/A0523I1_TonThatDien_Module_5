import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import * as FurumaService from "../service/FurumaService";
import { toast } from "react-toastify";

function BookCreate() {
  const [service, setService] = useState();
  const navigate = useNavigate();
  const [isSubmit, setSubmit] = useState([]);

  useEffect(() => {
    //     Call DB để lấy duex liệu ban đầu cho chức năng update
    //     useParam để lấy id
    //   const student = await studentService.findById(id);
    setBook({
      id: "",
      name: "",
      author: "",
      price: 0,
    });
  }, []);

  const validateBook = {
    id: Yup.number()
      .min(0, "Id không được nh hơn 0")
      .max(10000000000, "Id không được lớn hơn 10000000000")
      .required("Id không ược để trống"),
    name: Yup.string()
      .min(4, "Tên không được nhỏ hơn 4 ký tự")
      .max(100, "Tên không đươc lớn hơn 100 ký tự"),
    rental_price: Yup.number().min(0, "Giá không được nhỏ hơn 0"),
  };

  const createService = async (values) => {
    setSubmit(true);
    console.log(values);
    setSubmit(false);
    await FurumaService.addNewDichVu(values);
    toast.success("Book added successfully");
    navigate("/books");
  };
  if (!service) {
    return null;
  }
  return (
    <>
      <Formik
        initialValues={book}
        onSubmit={createBook}
        validationSchema={Yup.object(validateBook)}
      >
        <Form>
          Id: <Field name="id" />
          <br></br>
          <ErrorMessage name="id" component="p"></ErrorMessage>
          Name: <Field name="name" />
          <br></br>
          <ErrorMessage name="name" component="p"></ErrorMessage>
          Author: <Field name="author" />
          <br></br>
          <ErrorMessage name="author" component="p"></ErrorMessage>
          Price: <Field name="price" />
          <br></br>
          <ErrorMessage name="price" component="p"></ErrorMessage>
          <button type="submit">Thêm mới</button>
        </Form>
      </Formik>
    </>
  );
}

export default BookCreate;

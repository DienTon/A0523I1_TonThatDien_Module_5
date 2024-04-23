import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import * as FurumaService from "../service/FurumaService";
import { toast } from "react-toastify";

function ServiceCreate() {
  const [villa, setVilla] = useState();
  const [house, setHouse] = useState();
  const [room, setRoom] = useState();
  const navigate = useNavigate();
  const [isSubmit, setSubmit] = useState([]);
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    setVilla({
      id: "",
      name: " ",
      area: "",
      rental_price: "",
      max_capacity: 1,
      rental_types: ["year", "month", "day", "hour"],
      room_standard: "",
      other_facilities: ["Spa", "Gym", "BBQ area"],
      pool_area: "",
      floors: 1,
      image: "",
    });

    setHouse({
      id: "",
      name: "",
      area: "",
      rental_price: "",
      max_capacity: "",
      rental_types: ["year", "month", "day", "hour"],
      room_standard: "Standard",
      other_facilities: ["Garden", "Parking space"],
      floors: "",
      image: "",
    });

    setRoom({
      id: "",
      name: " ",
      area: "",
      rental_price: "",
      max_capacity: "",
      rental_types: ["year", "month", "day", "hour"],
      free_services: ["Wifi", "Air conditioning"],
      image: "",
    });
  }, []);

  const createService = async (values) => {
    setSubmit(true);
    console.log(values);
    setSubmit(false);
    await FurumaService.addNewDichVu(values);
    toast.success("Service added successfully");
    navigate("/services");
  };
  if (!villa && !house && !room) {
    return null;
  }

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Xử lý logic khi người dùng gửi mẫu
  };

  return (
    <div>
      <label htmlFor="service-select">Choose a service:</label>
      <select
        id="service-select"
        value={selectedService}
        onChange={handleServiceChange}
      >
        <option value="">Select a service</option>
        <option value="villa">Villa</option>
        <option value="house">House</option>
        <option value="room">Room</option>
      </select>

      {selectedService && (
        <>
          {selectedService === "villa" && (
            <>
              <Formik initialValues={villa} onSubmit={createService}>
                <Form>
                  <label htmlFor="villa-name">Villa Id:</label>
                  <Field type="text" id="id" name="id" />
                  <br></br>
                  <label htmlFor="villa-name">Villa Name:</label>
                  <Field type="text" id="name" name="name" />
                  <br></br>
                  <label htmlFor="villa-name">Villa area:</label>
                  <Field type="text" id="area" name="area" />
                  <br></br>
                  <label htmlFor="villa-name">Villa rental_price:</label>
                  <Field type="text" id="rental_price" name="rental_price" />
                  <br></br>
                  <label htmlFor="max_capacity">Villa max_capacity:</label>
                  <Field type="text" id="max_capacity" name="max_capacity" />
                  <br></br>
                  <label htmlFor="villa-name">Villa rental_types:</label>
                  <Field type="text" id="rental_types" name="rental_types" />
                  <br></br>
                  <label htmlFor="villa-name">Villa room_standard:</label>
                  <Field type="text" id="room_standard" name="room_standard" />
                  <br></br>
                  <label htmlFor="villa-name">Villa other_facilities:</label>
                  <Field
                    type="text"
                    id="other_facilities"
                    name="other_facilities"
                  />
                  <br></br>
                  <label htmlFor="villa-name">Villa pool_area:</label>
                  <Field type="text" id="pool_area" name="pool_area" />
                  <br></br>
                  <label htmlFor="villa-name">Villa floors:</label>
                  <Field type="text" id="floors" name="floors" />
                  <br></br>
                  <label htmlFor="villa-name">Villa image:</label>
                  <Field type="text" id="image" name="image" />
                  <br></br>
                  <button type="submit">Save</button>
                  {/* Thêm các trường dữ liệu khác cho Villa */}
                </Form>
              </Formik>
            </>
          )}

          {selectedService === "house" && (
            <>
              
              <Formik initialValues={house} onSubmit={createService}>
                <Form>
                  <label htmlFor="id">House Id:</label>
                  <Field type="text" id="id" name="id" />
                  <br />
                  <label htmlFor="name">House Name:</label>
                  <Field type="text" id="name" name="name" />
                  <br />
                  <label htmlFor="area">House area:</label>
                  <Field type="text" id="area" name="area" />
                  <br />
                  <label htmlFor="rental_price">House rental_price:</label>
                  <Field type="text" id="rental_price" name="rental_price" />
                  <br />
                  <label htmlFor="max_capacity">House max_capacity:</label>
                  <Field type="text" id="max_capacity" name="max_capacity" />
                  <br />
                  <label htmlFor="rental_types">House rental_types:</label>
                  <Field type="text" id="rental_types" name="rental_types" />
                  <br />
                  <label htmlFor="room_standard">House room_standard:</label>
                  <Field type="text" id="room_standard" name="room_standard" />
                  <br />
                  <label htmlFor="other_facilities">
                    House other_facilities:
                  </label>
                  <Field
                    type="text"
                    id="other_facilities"
                    name="other_facilities"
                  />
                  <br />
                  <label htmlFor="pool_area">House pool_area:</label>
                  <Field type="text" id="pool_area" name="pool_area" />
                  <br />
                  <label htmlFor="floors">House floors:</label>
                  <Field type="text" id="floors" name="floors" />
                  <br />
                  <label htmlFor="image">House image:</label>
                  <Field type="text" id="image" name="image" />
                  <br />
                  <button type="submit">Save</button>
                </Form>
              </Formik>

              {/* Thêm các trường dữ liệu khác cho House */}
            </>
          )}

          {selectedService === "room" && (
            <>
              
              <Formik initialValues={house} onSubmit={createService}>
                <Form>
                  <label htmlFor="id">Room Id:</label>
                  <Field type="text" id="id" name="id" />
                  <br />
                  <label htmlFor="name">Room Name:</label>
                  <Field type="text" id="name" name="name" />
                  <br />
                  <label htmlFor="area">Room area:</label>
                  <Field type="text" id="area" name="area" />
                  <br />
                  <label htmlFor="rental_price">Room rental_price:</label>
                  <Field type="text" id="rental_price" name="rental_price" />
                  <br />
                  <label htmlFor="max_capacity">Room max_capacity:</label>
                  <Field type="text" id="max_capacity" name="max_capacity" />
                  <br />
                  <label htmlFor="rental_types">Room rental_types:</label>
                  <Field type="text" id="rental_types" name="rental_types" />
                  <br />
                  <label htmlFor="room_standard">Room free_services:</label>
                  <Field type="text" id="free_services" name="free_services" />
                  <br />
                  <label htmlFor="image">Room image:</label>
                  <Field type="text" id="image" name="image" />
                  <br />
                  <button type="submit">Save</button>
                </Form>
              </Formik>

              {/* Thêm các trường dữ liệu khác cho Room */}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default ServiceCreate;

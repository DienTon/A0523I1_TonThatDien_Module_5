import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./component/Header";
import FurumaServiceList from "./component/FurumaServiceList";
import CreateService from "./component/CreateService";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
      <Header></Header>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/services" element={<FurumaServiceList />}></Route>
        <Route path="/services/create" element={<CreateService />}></Route>
        {/* <Route path="/services/:id" element={<ServiceDetails />}></Route>
        <Route path="/services/:id/edit" element={<EditService />}></Route> */}
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

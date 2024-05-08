import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BookList from './component/bookList';
import BookCreate from './component/bookCreate';
import 'bootstrap/dist/css/bootstrap.css';
import {ToastContainer} from "react-toastify";
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <BrowserRouter>
       <Routes>
         <Route path="/books" element={<BookList />}></Route>
         <Route path="/books/create" element={<BookCreate />}></Route>
       </Routes>
     </BrowserRouter>
     <ToastContainer />
    </>
  );
}

export default App;

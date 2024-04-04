import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BookList from './component/bookList';

function App() {
  return (
    <>
    <BrowserRouter>
       <Routes>
         <Route path="/books" element={<BookList />}></Route>
       </Routes>
     </BrowserRouter></>
  );
}

export default App;

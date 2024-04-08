import axios from "axios";

export const getAllBooks = async() =>{
        try {
          const res = await axios.get("http://localhost:3001/books");
          console.log(res.data);
          return res.data;
        } catch (error) {
          console.error(error);
        }
};

export const addNewBooks = async(book) =>{
    try {
        await axios.post("http://localhost:3001/books/create",book);
        return true;
    } catch (error) {
        return false;
    }
}

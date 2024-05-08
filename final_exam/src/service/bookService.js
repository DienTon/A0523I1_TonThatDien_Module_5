import axios from "axios";

export const getAllBooks = async (page) => {
    try {
        const res = await axios.get(`http://localhost:3001/books`);
        console.log(res.data);
        return res.data;
      } catch (error) {
        console.error(error);
      }
}
export const getAllCategories = async () => {
  try {
      const res = await axios.get(`http://localhost:3001/categories`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.error(error);
    }
}
export const addNewBooks = async (book) => {
  try {
    await axios.post("http://localhost:3001/books ", book);
    return true;
  } catch (error) {
    return false;
  }
};
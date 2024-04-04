import axios from "axios";

export const getAllBooks = async() =>{
    try {
        const res = await axios.get("http://localhost:3000/books")
        console.log(res)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}
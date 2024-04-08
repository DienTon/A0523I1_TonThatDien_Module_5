import { useNavigate } from "react-router-dom";
import * as bookService from "../../src/service/bookService"
import { toast } from "react-toastify";

function bookCreate(){
    const [bookList, setBookList] = useState([]);
    const navigate = useNavigate();
    const [isSubmit, setSubmit] = useState([]);
    
    const createBook = async(values) => {
        setSubmit(true);
        console.log(values);
        setSubmit(false);;
        const isSuccess = await bookService.addNewBooks(values);
        toast.success("Book added successfully")
        navigate("/books");
    }
}
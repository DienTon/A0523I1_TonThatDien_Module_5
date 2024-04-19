import axios from "axios";

export const getAllDichVu = async () => {
    try {
        const res = await axios.get("http://localhost:3001/services");
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}


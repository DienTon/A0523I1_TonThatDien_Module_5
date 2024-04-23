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

export const addNewDichVu = async (service) => {
    try {
        await axios.post("http://localhost:3001/services", service);
        return true;
    } catch (error) {
        return false;
    }
}


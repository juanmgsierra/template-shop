import axios from 'axios';

//const API_URL = process.env.PUBLIC_URL;
//const API_FIREBASE = "https://us-central1-e-commerce-7e1b8.cloudfunctions.net";
const API_FIREBASE =  "http://localhost:5001/e-commerce-7e1b8/us-central1";

export const editarPerfil = async (user) => {
    try {
        const response = await axios.put(`${API_FIREBASE}/users/update/${user.id}`, user);
        return response;
    } catch (error) {
        throw error;
    }
}

export const obtenerDirecciones = async (user) => {
    try {
        const response = await axios.get(`${API_FIREBASE}/address/find/${user.id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}
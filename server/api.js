import axios from 'axios';

//const API_URL = process.env.PUBLIC_URL;
//const API_FIREBASE = "https://us-central1-e-commerce-7e1b8.cloudfunctions.net";
const API_FIREBASE =  "http://localhost:5001/e-commerce-7e1b8/us-central1/app/api";

export const editarPerfil = async (user) => {
    try {
        const response = await axios.put(`${API_FIREBASE}/users/update/${user.id}`, user);
        return response.data;
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

export const saveAddress = async (address) => {
    try {
        const response = await axios.post(`${API_FIREBASE}/address/create`, address);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const updateAddress = async (address) => {
    try {
        const response = await axios.put(`${API_FIREBASE}/address/update/${address.id}`, address);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const deleteAddress = async (address) => {
    try {
        await axios.delete(`${API_FIREBASE}/address/${address}`)
    } catch (error) {
        console.log(error);
    }
}

export const obtenerCarrito = async (user) => {
    try {
        const response = await axios.get(`${API_FIREBASE}/cart/find/${user.id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const saveCart = async (cart) => {
    try {
        const response = await axios.post(`${API_FIREBASE}/cart/create`, cart);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const deleteCart = async (cart) => {
    try {
        const response = await axios.delete(`${API_FIREBASE}/cart/delete/${cart.id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
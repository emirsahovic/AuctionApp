import axios from 'axios';

export async function registerUser(user) {
    return await axios.post('http://localhost:8080/auth/register', user);
};

export const loginUser = async (user) => {
    return await axios.post('http://localhost:8080/auth/login', user);
};

export const getProduct = async (productId, userId) => {
    return (await axios.get(`http://localhost:8080/products/?product_id=${productId}&user_id=${userId}`)).data;
};

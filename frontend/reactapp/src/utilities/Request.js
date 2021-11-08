import axios from 'axios';

export async function registerUser(user) {
    return await axios.post('http://localhost:8080/auth/register', user);
};

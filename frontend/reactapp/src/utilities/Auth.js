const setSession = (user, token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
}

const removeSession = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
};

const setRememberUser = (email, password) => {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
}

const getRememberUser = () => {
    let email = localStorage.getItem('email');
    let password = localStorage.getItem('password');
    return { email, password };
}

const removeRememberUser = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
}

const getUserId = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).id : null;
};

const getToken = () => {
    return localStorage.getItem('token') || null;
}

export {
    setSession,
    removeSession,
    setRememberUser,
    getRememberUser,
    removeRememberUser,
    getUserId,
    getToken
}

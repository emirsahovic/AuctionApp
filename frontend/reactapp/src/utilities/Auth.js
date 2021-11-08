const setSession = (user, token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
}

const removeSession = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
};

const getUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
};

const getToken = () => {
    return localStorage.getItem('token') || null;
}

export {
    setSession,
    removeSession,
    getUser,
    getToken
}

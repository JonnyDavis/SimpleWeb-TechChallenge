export const createUser = ({ username, email, password }) => {
    return {
        type: "createUser",
        username: username,
        email: email,
        password: password,
    };
};

export const storeToken = ({ email, password }) => {
    return {
        type: "storeToken",
        email: email,
        password: password,
    };
};
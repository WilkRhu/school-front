import jwt from "jsonwebtoken";

function logUser(token) {
    try {
        const decoded = jwt.verify(token, '@wilk2020#');
        const userAuth = {
            id: decoded.id,
            name: decoded.name,
            email: decoded.email,
            type: decoded.type
        };

        return userAuth;
    } catch (error) {
        return error;
    }
};

export default logUser;
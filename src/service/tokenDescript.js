import React from "react";
import jwt from "jsonwebtoken";
import {
    getToken
} from "./auth";


function tokenDescript(token) {
    return jwt.verify(token, "@wilk2020#", function (err, decoded) {
        const user = {
            id: decoded.id,
            name: decoded.name,
            email: decoded.email,
            type: decoded.type
        }
        return user;
    });
};

export default tokenDescript;
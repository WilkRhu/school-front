import React from 'react';
import jwt from 'jsonwebtoken';

function Descript (token) {
    var decoded = jwt.verify(token, 'shhhhh');
    console.log(decoded);
};

export { 
    Descript 
};
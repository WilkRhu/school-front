import React from "react";

function Danger(message) {
    return <div className="alert alert-danger">{message}</div>;
    };


function Success(message) {
    return <div className="alert alert-success">{message}</div>;
  };

export {
    Danger,
    Success
}
    
import React, { useState, useEffect } from "react";

export default function Danger(props) {
  return <div className="alert alert-danger">{props.message}</div>;
};



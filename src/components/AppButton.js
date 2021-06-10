import React from "react";
import { Link } from "react-router-dom";
import "./styles/AppButton.scss";

function AppButton({ content }) {
    return (

        <button className="btn "><Link to="#">{content}</Link></button>

    );
}

export default AppButton;

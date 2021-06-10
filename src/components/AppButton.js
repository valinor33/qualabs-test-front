import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/AppButton.scss";

function AppButton({ content }) {
    const [selection, setSelection] = useState("")

    const handleButton = (e) => {
        console.log(e.target)
    }

    console.log(content);
    return (
        <button className="btn "><Link to={`/${content}`} onClick={handleButton}>{content}</Link></button>

    );
}

export default AppButton;

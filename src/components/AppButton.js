import React from "react";
import { useDispatch } from "react-redux";
import actions from "../redux/actions.js";
import "./styles/AppButton.scss";

function AppButton({ content }) {
    const dispatch = useDispatch()

    const handleButton = (e) => {
        const val = e.target.value.toLowerCase()
        dispatch(actions.loadModule(val))
    }

    return (
        <button className="btn" onClick={handleButton} value={content}>{content}</button>

    );
}

export default AppButton;

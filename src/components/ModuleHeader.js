import React from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import actions from "../redux/actions.js";
import "./styles/ModuleHeader.scss"
/* components */

function ModuleHeader() {
    const dispatch = useDispatch()
    const state = useSelector((state) => state);

    const { module } = state
    const { data } = state

    let modules = Object.keys(data[module]);

    const handleButton = (e) => {
        dispatch(actions.selectedModule(e.target.value))
    }

    return (
        <div className="module-header">
            {
                modules.map((e, i) => {
                    return (
                        <button className="btn" key={i} onClick={handleButton} value={i + 1}>{`Module ${i + 1}`}</button>

                    );
                })
            }

        </div>
    )
}

export default ModuleHeader

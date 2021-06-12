import React, { useEffect } from 'react'
import AppButton from './AppButton'
import { useSelector } from "react-redux";
import "./styles/ModuleHeader.scss"

function ModuleHeader() {
    const state = useSelector((state) => state);

    const { module } = state
    const { data } = state

    let modules = Object.keys(data[module]);

    return (
        <div className="module-header">
            {
                modules.map((e, i) => {
                    return (
                        <button className="btn" key={i}>{`Module ${i + 1}`}</button>

                    );
                })
            }

        </div>
    )
}

export default ModuleHeader

import React, { useEffect } from 'react'
import AppButton from './AppButton'
import { useSelector } from "react-redux";
import "./styles/ModuleHeader.scss"

function ModuleHeader() {
    const state = useSelector((state) => state);


    return (
        <div className="module-header">

            <AppButton content="Module 1" />

        </div>
    )
}

export default ModuleHeader

import React, { useEffect } from 'react'
import AppButton from './AppButton'
import "./styles/ModuleHeader.scss"

function ModuleHeader() {



    return (
        <div className="module-header">
            <AppButton content="Module 1" />
            <AppButton content="Module 2" />
            <AppButton content="Module 3" />
            <AppButton content="Module 4" />
        </div>
    )
}

export default ModuleHeader

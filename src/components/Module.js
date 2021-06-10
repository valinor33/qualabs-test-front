import React from 'react'
import "./styles/Module.scss"
import ModuleHeader from "./ModuleHeader.js"
import ModuleSection from './ModuleSection'


function Module({ data }) {
    return (
        <div className="module-main">
            <ModuleHeader />
            <ModuleSection />
        </div>
    )
}

export default Module

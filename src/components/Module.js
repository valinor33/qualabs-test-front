import React from 'react'
import { useSelector } from 'react-redux'
import "./styles/Module.scss"
/* components */
import ModuleHeader from "./ModuleHeader.js"
import ModuleSection from './ModuleSection'


function Module() {
    const isDataLoaded = useSelector(state => state.isDataLoaded)
    return (
        <div className="module-main">
            { isDataLoaded &&
                <>
                    <ModuleHeader />
                    <ModuleSection />
                </>
            }

        </div>
    )
}

export default Module

import React from 'react'
import AppButton from './AppButton'
import "./styles/AppHeader.scss"

function AppHeader() {
    return (
        <header className="header">
            <AppButton content="Content_module" />
            <AppButton content="Auth_module" />
        </header>
    )
}

export default AppHeader

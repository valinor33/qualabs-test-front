import React from 'react'

import "./styles/AppHeader.scss"

import AppButton from './AppButton'



function AppHeader() {

    return (
        <header className="header">

            <AppButton content="Auth_module" />
            <AppButton content="Content_module" />

        </header>
    )
}

export default AppHeader

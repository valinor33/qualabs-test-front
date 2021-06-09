import React from 'react'
import "./styles/AppHeader.scss"

function AppHeader() {
    return (
        <header className="header">
            <button className="btn content_module">Content_module</button>
            <button className="btn auth_module">Auth_module</button>
        </header>
    )
}

export default AppHeader

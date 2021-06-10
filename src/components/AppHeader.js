import React from 'react'
import AppButton from './AppButton'
import "./styles/AppHeader.scss"

function AppHeader({ data }) {

    let content = []

    for (let e in data) {
        content.push(e)
    }

    return (
        <header className="header">
            {content.map((e, i) => {
                return <AppButton content={e} key={i} />

            })}
        </header>
    )
}

export default AppHeader

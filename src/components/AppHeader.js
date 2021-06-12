import React from 'react'
import { useSelector } from 'react-redux'
import "./styles/AppHeader.scss"

import AppButton from './AppButton'
function AppHeader() {
    const state = useSelector(state => state.data)
    let content = Object.keys(state);

    return (
        <header className="header">
            {
                content.map((e, i) => {

                    return <AppButton content={e} key={i} />
                })
            }

        </header>
    )
}

export default AppHeader

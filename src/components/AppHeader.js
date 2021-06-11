import React from 'react'
import { useSelector } from 'react-redux'
import "./styles/AppHeader.scss"

import AppButton from './AppButton'
function AppHeader() {
    const state = useSelector(state => state.data)
    let content = Object.keys(state);
    console.log(content);

    return (
        <header className="header">
            {
                content.map(e => {

                    return <AppButton content={e} />
                })
            }

        </header>
    )
}

export default AppHeader

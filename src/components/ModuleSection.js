import React from 'react'
import { useSelector } from 'react-redux'
import "./styles/ModuleSection.scss"

import iconDelete from "../assets/delete.svg"
import iconCreate from "../assets/create.svg"
import iconAdvice from "../assets/advice.svg"
import iconSubmit from "../assets/submit.svg"

function ModuleSection() {
    const state = useSelector((state) => state);

    const { selectedModule } = state
    const { module } = state
    const { data } = state

    let modules = Object.keys(data[module]);

    const provider = modules[selectedModule - 1]

    const users = data[module][provider]

    return (
        <div className="module-section">
            <h3>Numbers of users in module {selectedModule}:</h3>
            <section className="user-container">
                {
                    users && users.map((e, i) => {
                        return <p className="user"> User {i + 1}: "{e}" </p>
                    })
                }

            </section>
            <section className="action-container">
                <button className="btn-action btn-green">Submit<img src={iconSubmit} alt="submit" /></button>
                <button className="btn-action btn-salmon"><img src={iconCreate} alt="create" />Create</button>
                <button className="btn-action btn-yellow">Advice <img src={iconAdvice} alt="advice" /></button>
                <button className="btn-action btn-red">Delete <img src={iconDelete} alt="delete" /></button>
            </section>
        </div>
    )
}

export default ModuleSection

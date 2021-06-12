import React, { useState } from 'react'
import "./styles/ModuleSection.scss"

import iconDelete from "../assets/delete.svg"
import iconCreate from "../assets/create.svg"
import iconAdvice from "../assets/advice.svg"
import iconSubmit from "../assets/submit.svg"

function ModuleSection() {

    const [number, setNumber] = useState(1)
    return (
        <div className="module-section">
            <h3>Numbers of users in module {number}:</h3>
            <section className="user-container">
                <p className="user"> User 1 </p>
                <p className="user"> User 2 </p>
                <p className="user"> User 3 </p>
                <p className="user"> User 4 </p>
                <p className="user"> User 5  </p>
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

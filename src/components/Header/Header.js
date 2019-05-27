import React from 'react'
import logo from '../../img/logo1.png'
import './Header.css'

export default function Header({ handleSubmit }) {
    return (
        <header className="header">
            <p className="intro-text"></p>
            <form className="form">
                <input placeholder="Introduce el tipo de invitación" />
                <button onClick={e => handleSubmit}>Buscar</button>
            </form>
        </header>
    )
}

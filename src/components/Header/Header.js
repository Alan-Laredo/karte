import React from 'react'
import logo from '../../img/logo1.png'
import './Header.css'

export default function Header({ handleSubmit }) {
    return (
        <header className="header">
            <h1 className="logo"><img src={logo} alt="logo" width="300px" /></h1>
            <h3 className="intro-title">
                Tu buscador de clínicas y especialistas en
                salud dentro del estado
            </h3>
            <p className="intro-text">Siempre abiertos y cerca de tí</p>
            <form className="form">
                <input placeholder="Aqui el nombre de la clinica o especialista" />
                <button onClick={e => handleSubmit}>Buscar</button>
            </form>
        </header>
    )
}

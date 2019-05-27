import React from 'react'
import logo from '../../img/logo1.png'
import './Header.css'

export default function Header({ handleSubmit }) {
    return (
        <header className="header">
            {/* <h1 className="logo"><img src={logo} alt="logo" width="300px" /></h1> */}
            {/* <h3 className="intro-title">Invitaciones y Participaciones de calidad</h3> */}
            <p className="intro-text">Bodas, Bautisos, XV Años, Eventos Sociales y Empresariales</p>
            <form className="form">
                <input placeholder="Introduce el tipo de invitación" />
                <button onClick={e => handleSubmit}>Buscar</button>
            </form>
        </header>
    )
}

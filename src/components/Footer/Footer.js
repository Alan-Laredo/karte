import React from 'react'
import Copyright from './Copyright';
import Section from './Section';

import logo from '../../img/logo.png'
import './Footer.css'

export default function Footer() {
    const items = [
        { id: 1, name: 'Inicio', href: '#' },
        { id: 2, name: 'Revista', href: '#' },
        { id: 3, name: 'Blog', href: '#' },
        { id: 4, name: 'Contacto', href: '#' },
    ]
    return (
        <footer className="Footer">
            <div className="Footer above">
                <Section className="Footer above logo" logo={logo}>
                    <p style={{ fontSize: '20px' }}>
                        La más fina colección de Participaciones Sociales para tus eventos:
                        <br />
                        Bodas, Bautisos, XV Años, Eventos Sociales y Empresariales
                    </p>
                </Section>
                <Section className="Footer above social" title="social"></Section>
                <Section className="Footer above menu" title="menú" items={items}></Section>
            </div>
            <div className="Footer below"><Copyright></Copyright></div>
        </footer>
    )
}

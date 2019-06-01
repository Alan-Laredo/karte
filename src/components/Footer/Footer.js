import React from 'react'
import Copyright from './Copyright';
import Section from './Section';

import logo from '../../img/logo.png'
import './Footer.css'

const Footer = () => {
    const menu = [
        { name: 'Inicio', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Contacto', href: '#' },
    ]
    const social = [
        { icon: 'facebook-f', href: '#' },
        { icon: 'pinterest-p', href: '#' },
        { icon: '', href: '#' },
    ]
    return (
        <footer className="Footer">
            <div className="Footer above">
                <Section className="Footer above logo" logo={logo}>
                    <p style={{ fontSize: '20px' }}>
                        La más fina colección de Participaciones Sociales para tus eventos:
                        <br />
                        Bodas, Bautizos, Baby Shower, XV Años, Eventos Sociales y Empresariales
                    </p>
                </Section>
                <Section className="Footer above social" title="social" items={social}></Section>
                <Section className="Footer above menu" title="menú" items={menu}></Section>
            </div>
            <div className="Footer below"><Copyright></Copyright></div>
        </footer>
    )
}

export default Footer
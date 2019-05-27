import React, {useState} from 'react'
import './Header.css'

export default function Header(props) {
    const [search, setSearch] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        props.search(search)
    }
    return (
        <header className="header">
            <p className="intro-text"></p>
            <form className="form" onSubmit={e => handleSubmit(e)}>
                <input
                onChange={e => setSearch(e.target.value)}
                placeholder="Introduce el tipo de invitación" />
                <button>Buscar</button>
            </form>
        </header>
    )
}

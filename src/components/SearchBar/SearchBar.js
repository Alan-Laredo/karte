import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import './SearchBar.css'

const SearchBar = (props) => {
    const [search, setSearch] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        props.history.push('/tag/' + search)
        setSearch('')
    }
    return (
        <form className="search-bar" onSubmit={e => handleSubmit(e)}>
            <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Introduce el tipo de invitación" />
            <button>Buscar</button>
        </form>
    )
}

export default withRouter(SearchBar)

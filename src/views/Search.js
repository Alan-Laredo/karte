import React, { Component } from 'react'
import data from './data.json'

export class Search extends Component {
    state = {
        invitaciones: []
    }

    componentWillMount() {
        data.shift()
        this.setState({
            invitaciones: data.map((inv) => {
                inv.image = require("../img/" + inv.image)
                return inv
            })
        })
    }

    render() {
        const invs = this.state.invitaciones.filter(({ tags }) => tags.includes(this.props.match.params.tag))
        return (
            <div>
                {invs.length ? invs.map((inv, key) => (
                    <div key={key}>
                        <p>{inv.title}</p>
                        <img src={inv.image} alt={inv.title} width="100vw" style={{ width: '100vw' }} />
                        <div>tags: {inv.tags.map((tag, i) => <p key={i}>{tag}</p>)}</div>
                    </div>
                )) : 'No hay invitaciones con ese tag'}
            </div>
        )
    }
}

export default Search

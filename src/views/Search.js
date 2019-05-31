import React, { Component } from 'react'
import data from './data.json'
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';

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
                <Header title="Resultados"></Header>
                <h4>ESTOS SON LOS RESULTADOS QUE COINCIDEN CON TU BUSQUEDA:</h4>
                {invs.length ? invs.map((inv, key) => (
                    <div key={key}>
                        <p>{inv.title}</p>
                        <img src={inv.image} alt={inv.title} width="100vw" style={{ width: '100vw' }} />
                        <div>tags: {inv.tags.map((tag, i) => <p key={i}>{tag}</p>)}</div>
                    </div>
                )) : 'No hay invitaciones con ese tag'}
                <Footer/>
            </div>
        )
    }
}

export default Search

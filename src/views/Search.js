import React, { Component } from 'react'
import data from './data.json'
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import Result from './../components/Result/Result'

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
                <h4 className="title">ESTOS SON LOS RESULTADOS QUE COINCIDEN CON TU BUSQUEDA:</h4>
                {invs.length ? invs.map((inv, i) => (
                    <Result inv={inv} key={i} i={i}></Result>
                )) : 'No hay invitaciones con ese tag'}
                <Footer/>
            </div>
        )
    }
}

export default Search
